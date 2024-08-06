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


// drop down active line start

const dropDown = document.querySelector('.drop-down-menu');


function dropDownActive() {
    dropDown.classList.toggle('active');
    console.log(dropDown);
}


// drop down active line finish

function test(e) {
    e.preventDefault();
}