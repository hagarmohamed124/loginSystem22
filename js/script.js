let userName = document.getElementById('user-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let alertMessage = document.querySelector('#massage');

let SingnUp = [];



if (localStorage.getItem('SingnUp') != null) {
    SingnUp = JSON.parse(localStorage.getItem('SingnUp'));
    getSingnUp();
}

var myBtn = document.querySelector('.btn');
myBtn.addEventListener('click', function() {
    getCheckExists();
    getCheck();
 
});

function getSingnUp() {
    let fromInputs = {
        Name:  userName.value,
        email: email.value,
        password: password.value
    }

    SingnUp.push(fromInputs);

    localStorage.setItem('SingnUp', JSON.stringify(SingnUp));
    console.log(SingnUp);
    getClear();
}


function getClear() {
    userName.value = "";
    email.value = "";
    password.value = "";
}

function getCheck() {
    if (userName.value === "" || email.value === "" || password.value === "") {
        alertMessage.innerHTML = 'All inputs required';
        alertMessage.classList.remove('d-none');
        alertMessage.style.color = 'red';
    }

    else if (getCheckExists() == true ) {
        alertMessage.innerHTML = 'email already exists';
        alertMessage.classList.remove('d-none');
        alertMessage.style.color = 'red';
    } 

    else if (userName.value !== "" && email.value !== "" && password.value !== "") {
        alertMessage.innerHTML = 'Success';
        alertMessage.classList.remove('d-none');
        alertMessage.style.color = 'green';
        getSingnUp();
    }
        
}


function getCheckExists() {
    for (let i = 0; i < SingnUp.length; i++) {
    if (SingnUp[i].email == email.value  ) {
        return true;
    
    }
        
    } 
}






































































