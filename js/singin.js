let signinEmail = document.querySelector('.signinEmail');
let signinPassword = document.querySelector('.signinPassword');

let alertmassage = document.getElementById('alertmassage');
let signin = [];

if (localStorage.getItem('SingnUp') !== null) {

    signin = JSON.parse(localStorage.getItem('SingnUp'))
}


let loginBtn = document.querySelector('.btn');
loginBtn.addEventListener('click', function () {
    getCheck();
    
})


function getSignin() {

    for (let i = 0; i < signin.length; i++) {
        if (signin[i].email == signinEmail.value && signin[i].password == signinPassword.value) {
            localStorage.setItem("UserName" , signin[i].Name);
            return true;
            
        }

    }

}



function getCheck() {
    if (getSignin() == true) {
    window.location.href = 'home.html';
        
     }

    else if  (getSignin() !== true){
    
    alertmassage.innerHTML ='incorrect email or password';
    alertmassage.classList.remove('d-none');
    alertmassage.style.color = 'red';
    }
}