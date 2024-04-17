let welcomeMessage = document.getElementById('welcomeMassege');

if (localStorage.getItem("UserName") !== null) {
    welcomeMessage.innerHTML = `Welcome ${localStorage.getItem("UserName")}`;

}

document.querySelector('.btn').addEventListener('click' , function() {
    localStorage.removeItem("UserName");
})

