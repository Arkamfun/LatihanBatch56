function getData(e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    console.log(name, email, phone, subject, message);
    e.preventDefault();

    if(email == "") {
        alert("Email cannot be empty");
        return; 
    } else if (name == "") {
        alert("Name cannot be empty");
        return;
    } else if (phone == "") {
        alert("Phone cannot be empty");
        return;
    } else if (subject == "") {
        alert("Subject cannot be empty");
        return;
    } else if (message == "") {
        alert("Message cannot be empty");
        return;
    } else{
        alert("Your message has been sent");
    }
    let myMail = "kafiabdurrahim@gmail.com";
    let a = document.createElement('a');
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&body=${message}&su=${subject}`;
    a.target = '_blank';
    a.click();
}   


// list tech
let imgNode = `<img src="assets/images/nodejs.svg" alt="">`;
let imgNext = `<img src="assets/images/nextjs.svg" alt="">`;
let imgReact = `<img src="assets/images/react.svg" alt="">`;
let imgTypescript = `<img src="assets/images/typescript.svg" alt="">`;

// test ambil gambar
// 

let card = document.getElementById("card");

function getBlogData (event) {
    let ProjectName = document.getElementById("title").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let desc = document.getElementById("desc").value;
    let techNode = document.getElementById("node");
    let techNext = document.getElementById("nextJs");
    let techTypescript = document.getElementById("typescript");
    let techReact = document.getElementById("react");

    event.preventDefault();

    // cek input kosong
    if(ProjectName == "") {
        alert("Project Name cannot be empty");
        return;
    } else if (startDate == "") {
        alert("Start Date cannot be empty");
        return;
    } else if (endDate == "") {
        alert("End Date cannot be empty");
        return;
    } else if (desc == "") {
        alert("Description cannot be empty");
    }

    // checkbox logic
    let selectedValues = [];
    let listStack =``
    if (techNode.checked) {
        selectedValues.push(imgNode);
      }
      if (techNext.checked) {
        selectedValues.push(imgNext);
      }
      if (techTypescript.checked) {
        selectedValues.push(imgTypescript);
      }
      if (techReact.checked) {
        selectedValues.push(imgReact);
      }
      for(let i = 0; i < selectedValues.length; i++) {
        listStack += selectedValues[i];
    }



    //   duration logic
    let duration = new Date(endDate) - new Date(startDate);
    let bulan = Math.ceil(duration / (1000 * 60 * 60 * 24 * 30));

      let blogDatas = []
      let blogData = {
        title: ProjectName,
        waktu:bulan,
        desc: desc,
        
      }

      blogDatas.push(blogData);
      console.log(blogDatas);

    // logic delete card

    for(let i = 0;i < blogDatas.length; i++) {
        function deleteData(index) {
            blogDatas.splice(index, 1);
            card.innerHTML = "";
        }
        
        card.innerHTML += `<div class="project-card" >
                    <div class="card">
                        <div class="card-img">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                        </div>
                        <div class="card-title">
                            <a href="details.html">
                            <p class="title">${blogData.title}</p>
                            </a>
                            <p class="durasi">${blogData.waktu} Bulan</p>
                        </div>
                        <div class="card-desc">
                        
                            <p>${blogData.desc}</p>

                        </div>
                        <div class="logo-stack">
                            ${listStack}
                        </div>
                        <div class="button">
                            <button>edit</button>
                            <button onclick="deleteData(${i})">delete</button>
                        </div>
                    </div>
            </div>`

}

};