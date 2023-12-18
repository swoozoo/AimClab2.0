var errorLine = document.getElementById("error-line");
errorLine.innerHTML = "";

function signupValidation(e){
    e.preventDefault();
    var form = document.getElementById("register-form");
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    var upperCase = false;
    var lowerCase = false;
    var number = false;

    for(let i = 0; i < pass.length; i++){
        if(pass[i] >= 'A' && pass[i] <= 'Z'){
            upperCase = true;
        } else if(pass[i] >= 'a' && pass[i] <= 'z'){
            lowerCase = true;
        } else if (pass[i] >= '0' && pass[i] <= '9'){
            number = true;
        }
    }

    var emailArray = email.split('@');
    var domain = emailArray[1];

    var inputDate = new Date(dob);
    var today = new Date();

    var passLength = pass.length;

    if(name == ""){
        errorLine.innerHTML = "Name must not empty!";
    } else if (dob == ""){
        errorLine.innerHTML = "Date of birth must not empty!";
    } else if (inputDate > today){
        errorLine.innerHTML = "Date of birth is invalid!";
    } else if (!male && !female){
        errorLine.innerHTML = "Gender must not empty!"; 
    } else if (email == ""){
        errorLine.innerHTML = "Email must not empty!";
    } else if(domain != "gmail.com"){
        errorLine.innerHTML = "Domain email must used gmail.com!";
    } else if (pass == ""){
        errorLine.innerHTML = "Password must not empty!";
    } else if (upperCase == false){
        errorLine.innerHTML = "Password must include at least 1 uppercase letter!";
    } else if (lowerCase == false){
        errorLine.innerHTML = "Password must include at least 1 lowercase letter!";
    } else if (number == false){
        errorLine.innerHTML = "Password must include at least 1 number!";
    } else if (passLength < 8){
        errorLine.innerHTML = "Password length must have 8 digit or more!";
    } else {
        errorLine.innerHTML = "";
        alert("Successful Register!");
        window.location.href = 'home.html';
        form.reset();
    }
}