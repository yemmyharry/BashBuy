// Name and Password from the register-form
let myName = document.getElementById('userRgd');
let pw = document.getElementById('passwordRgd');


// storing input from register-form
function store() {
    localStorage.setItem('name', myName.value);
    localStorage.setItem('pw', pw.value);

    if (myName.value !== '' && pw.value !== ''){ 
    window.location.href = "sign-in.html"
    }
    else{
        alert("re-enter details")
    }
    
}





var uset = {};

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    let userName = document.getElementById('user');
    let userPw = document.getElementById('password');

    // check if stored data from register-form is equal to data from login form
    if(userName.value != storedName || userPw.value != storedPw) {
        alert('Please enter your correct Username and Password');
    }else {
        location.href = "store.html"
        
    }

}


// let nema = document.getElementById("user")
// document.getElementById("nemo").innerHTML= nema.value