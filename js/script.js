var container = document.getElementById('container');
var registerBtn = document.getElementById('register');
var loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function getdata() {
    var user = document.getElementById("user");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    if(user.value.length < 5) {
        user.style.border = "2px solid red";
        return;
    } else {
        user.style.border = "2px solid black";
    }
    
    if(email.value.indexOf("@") === -1) {
        email.style.border = "2px solid red";
        return;
    } else {
        email.style.border = "2px solid black";
    }
    
    if(password.value.length < 7) {
        password.style.border = "2px solid red";
        return;
    } else {
        password.style.border = "2px solid black";
    }
    
    var newUser = {
        username: user.value,
        email: email.value,
        password: password.value
    };
    
    var users = JSON.parse(localStorage.getItem("users")) || [];
    
    if(users.some(user => user.email === newUser.email)) {
        alert("Email already exists");
        return;
    }
    
    users.push(newUser);
    
    localStorage.setItem("users", JSON.stringify(users));
    
    window.open("./index.html", "_self");
}

document.getElementById("signup").addEventListener("click", getdata);

function login() {
    var useremail = document.getElementById("usemail");
    var userpassword = document.getElementById("uspassword");
    
    var users = JSON.parse(localStorage.getItem("users")) || [];
    
    var matchedUser = users.find(user => 
        user.email === useremail.value && 
        user.password === userpassword.value
    );
    
    if(matchedUser) {
        window.open("./home.html", "_self");
    } else {
        alert("you entered wrong email or password");
    }
}

document.getElementById("signin").addEventListener("click", login);