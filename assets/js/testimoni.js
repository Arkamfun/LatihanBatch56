const xhr = new XMLHttpRequest();
let section = document.querySelector(".section-cards");
let desc = document.querySelector("#desc");
let author = document.querySelector("#author");
let rating = document.querySelector("#rating");

xhr.open("GET", "https://api.npoint.io/0bdcefe3a60a398679a8")


xhr.send()

let people = new Promise((resolve, reject) => {
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject(xhr.statusText)
        }
    }
})

function allStar () {people
.then((data) => {
    console.log(data)
    section.innerHTML='';
    data.forEach((person) => {
            let isiCard = `<div class="testi-card">
            <div class="img-card">
                <img src="${person.urlImage}" alt="gambar testimoni">
            </div>
            <div class="desc-card">
                <p id="desc">"${person.isiKomentar}"</p>
            </div>
            <div class="author-card">
                <p id="author">- ${person.nama}</p>
            </div>
            <div class="rating-card">
                <p id="rating">Rating: ${person.rating} <i class="fa-solid fa-star fa-xl"></i></p>
            </div>
        </div>`
        section.innerHTML += isiCard

})

    })
    .catch((err) => {
        console.log(err)
    })
}

allStar();


function filterStar(star) {

    people
    .then((data) => {
        console.log("berhasil")
        section.innerHTML='';
        const filteredPeople = data.filter((person) => person.rating == star
    )
        filteredPeople.forEach((person) => {
            let isiCard = `<div class="testi-card">
            <div class="img-card">
                <img src="${person.urlImage}" alt="gambar testimoni">
            </div>
            <div class="desc-card">
                <p id="desc">"${person.isiKomentar}"</p>
            </div>
            <div class="author-card">
                <p id="author">- ${person.nama}</p>
            </div>
            <div class="rating-card">
                <p id="rating">Rating: ${person.rating} <i class="fa-solid fa-star fa-xl"></i></p>
            </div>
        </div>`
            section.innerHTML += isiCard
        })
    })
}

// function untuk menampilkan semua rating
// function allStar() {
//     section.innerHTML='';
//     people.forEach((person) => {
//         let isiCard = `<div class="testi-card">
//             <div class="img-card">
//                 <img src="${person.urlImage}" alt="gambar testimoni">
//             </div>
//             <div class="desc-card">
//                 <p id="desc">"${person.isiKomentar}"</p>
//             </div>
//             <div class="author-card">
//                 <p id="author">- ${person.nama}</p>
//             </div>
//             <div class="rating-card">
//                 <p id="rating">Rating: ${person.rating} <i class="fa-solid fa-star fa-xl"></i></p>
//             </div>
//         </div>`
//         section.innerHTML += isiCard
    
//     })
// }

// // buat function untuk menampilkan rating 1-5

// function filterStar(star) {
//     const filteredPeople = people.filter((person) =>person.rating == star
// )
//     section.innerHTML='';
//     filteredPeople.forEach((person) => {
//         let isiCard = `<div class="testi-card">
//         <div class="img-card">
//             <img src="${person.urlImage} alt="gambar testimoni">
//         </div>
//         <div class="desc-card">
//             <p id="desc">"${person.isiKomentar}"</p>
//         </div>
//         <div class="author-card">
//             <p id="author">- ${person.nama}</p>
//         </div>
//         <div class="rating-card">
//             <p id="rating">Rating: ${person.rating} <i class="fa-solid fa-star fa-xl"></i></p>
//         </div>
//     </div>`
//     section.innerHTML += isiCard
// })}

// allStar();
