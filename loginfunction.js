// Name and Password from the register-form
let myName = document.getElementById('name');
let pw = document.getElementById('pw');


// storing input from register-form
function store() {
    localStorage.setItem('name', myName.value);
    localStorage.setItem('pw', pw.value);

    if ("name" != '' && "pw" != ''){ 
    window.location.href = "loki.html"
    }
    else{
        alert("knead")
    }
    
}







// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value != storedName || userPw.value != storedPw) {
        alert('Please enter your correct Username and Password');
    }else {
        location.href = "to-do.html"
        
    }
}
