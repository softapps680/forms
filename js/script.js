

const submitRegForm = (event) => {
    event.preventDefault()

    // const fname = event.target['fname'].value.trim()
    
    console.log("HALLON "+event.target['fname'].value.trim());
    firstNameError.innerText = 'Här är resultatet'
}

const validate = (value) =>{
   
    lastNameError.innerText = 'obsobs' + value;
}

const start = () =>{
    var login = document.getElementById("login");
    var reg = document.getElementById("register");
    reg.style.display = "none";
    login.style.display = "block";
}
const newUser = () =>{
    var login = document.getElementById("login");
    var reg = document.getElementById("register");
    login.style.display = "none";
    reg.style.display="block";

   
}