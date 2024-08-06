function getBlogData (event) {
    console.log(event); 
    
// list tech
let imgNode = `<img src="assets/images/nodejs.svg" alt="">`;
let imgNext = `<img src="assets/images/nextjs.svg" alt="">`;
let imgReact = `<img src="assets/images/react.svg" alt="">`;
let imgTypescript = `<img src="assets/images/typescript.svg" alt="">`;

// test ambil gambar
// 

let card = document.getElementById("cards");


    let ProjectName = document.getElementById("title").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let desc = document.getElementById("desc").value;
    let techNode = document.getElementById("node");
    let techNext = document.getElementById("nextJs");
    let techTypescript = document.getElementById("typescript");
    let techReact = document.getElementById("react");





    // cek input kosong
    // if(ProjectName == "") {
    //     alert("Project Name cannot be empty");
    //     return;
    // } else if (startDate == "") {
    //     alert("Start Date cannot be empty");
    //     return;
    // } else if (endDate == "") {
    //     alert("End Date cannot be empty");
    //     return;
    // } else if (desc == "") {
    //     alert("Description cannot be empty");
    // }

    // checkbox logic
    let selectedValues = [];
    let listStack =``;
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
        
        document.getElementById("title").value = "";
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
        document.getElementById("desc").value = "";
        techNode.checked = false;
        techNext.checked = false;
        techTypescript.checked = false;
        techReact.checked = false;  
        
        
        blogDatas.push(blogData);
        console.log(blogDatas);

    // logic delete card

    for(let i = 0;i < blogDatas.length; i++) {
        // function deleteData(index) {
        //     blogDatas.splice(index, 1);
        //     card.innerHTML = "";
        // }
    
        
        return blogDatas;
        // card.innerHTML += `<div class="card" style="width: 25rem;">
        //     <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="...">
        //     <div class="card-body">
        //         <h5 class="card-title">${blogData.title}</h5>
        //         <p class="durasi">${blogData.waktu} bulan</p>
        //         <p class="card-text">${blogData.desc}</p>
        //         <div class="logo-stack">
        //             ${listStack}
        //     </div>
        //     <div class="text-center">
        //         <a href="#" class="btn btn-dark">delete</a>
        //         <a href="#" class="btn btn-dark">edit</a>
        //     </div>
        //     </div>
        //     </div>`

}

console.log("berhasil");
event.preventDefault();
};
