const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const upload = multer({
    storage: multer.diskStorage({
       destination: (req, file, cb) => {
                    
          cb(null, "assets/uploads");
       },
       filename: (req, file, cb) => {
          cb(null, Date.now() + file.originalname);
       },
    }),
 });
app.set('view engine', 'hbs');
// jangan pake /assets tapi langsung assets/views
app.set('views','assets/views');



// css state

app.use(express.static('assets'));
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('assets/uploads'));
// baca file json
app.use(express.json());

// ini untuk middleware body parser (gampangnya ini syarat untuk mengirim data dari form html)
app.use(express.urlencoded  ({ extended: true }));

// routing    req = menerima sebuah request temen-temen dan res = mengirimkan sebuah response temen-temen
app.get('/', (req, res) => {
    res.render('index', {
        data: "Hello World dari data server",
    })

})

// function add blog


let prosessedProjects = []
let selectedstack = [];

function addProjects(req, res) {


    function addProsPro() {
        
        const durationInmilSec = new Date(req.body.endDate) - new Date(req.body.startDate);
        const duration = Math.floor(durationInmilSec / (1000 * 60 *60 *24 * 30))
        let currentObj = {
            id: prosessedProjects.length + 1,
            title: req.body.title,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            duration: duration,
            desc: req.body.desc,
            tech: req.body.tech,
            img: req.file.filename
        }
        if(Array.isArray(req.body.tech)) {
            currentObj.tech = req.body.tech
        } else {
            currentObj.tech = [req.body.tech]
        }
        prosessedProjects.push(currentObj)
    }
    
    addProsPro()
    console.log(prosessedProjects);

    
    
    res.redirect('/projects')
}


// functio add blog finish

// function update Blog start

function updateProject(req,res) {
    console.log(req.body)
    const id = req.params.id
    const durationInmilSec = new Date(req.body.endDate) - new Date(req.body.startDate);
        const duration = Math.floor(durationInmilSec / (1000 * 60 *60 *24 * 30))
        let updateProject = {
            id: id,
            title: req.body.title,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            duration: duration,
            desc: req.body.desc,
            tech: req.body.tech,
            img: req.file.filename,
        }

        const index = prosessedProjects.findIndex(project => project.id == id)

        prosessedProjects[index] = updateProject
        if(Array.isArray(req.body.tech)) {
            updateProject.tech = req.body.tech
        } else {
            updateProject.tech = [req.body.tech]
        }
        console.log(updateProject);


    res.redirect('/projects')
}

// function update Blog finish

// contact section
app.get('/contact', renderContact);


// contact section finish

// projects section
app.get('/projects', renderProject);

// post projects add
app.post('/projects', upload.single('image'), addProjects);


// projects section finish


// testimoni section 
app.get('/testimonial', renderTestimonials);

// testimoni section finish


// details section
app.get('/details/:id', renderDetails);


// details section finish


// update project section start
app.get('/editProject/:id',renderUpdateProject)

app.post('/editProject/:id', upload.single('image'), updateProject)

// update project section finish


// delete project section

app.get('/deleteProject/:id', deleteProject)
function deleteProject(req,res) {
    const id = req.params.id
    const index = prosessedProjects.findIndex(project => project.id == id)
    prosessedProjects.splice(index, 1)
    res.redirect('/projects')
}

// delete project section finish
// function render
function renderContact (req, res) {
    res.render('contact')
}

function renderProject (req, res) {
    res.render('projects', {
        data: prosessedProjects,
    })
}

function renderTestimonials (req,res) {
    res.render('testimonial')
}

function renderDetails (req,res) {
        const id = req.params.id
        
        const selectedProject = prosessedProjects.find( (project) => project.id == id)

        res.render('details', {
            data: selectedProject
        })
    // res.render('details')

}

function renderUpdateProject (req, res) {
    const id = req.params.id
        
    const project = prosessedProjects.find( (project) => project.id == id)
    

    res.render('edit-project', {
        data: project,
    }) 
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
