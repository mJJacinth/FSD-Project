const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
var badColor = "red";
var goodcolor = "green";
const button = document.getElementById('button');
const pattern=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = document.getElementById('email');
const emailmessage = document.getElementById('emailmessage');
const Birthday_date = document.getElementById('birthday');

function contactcheck(){
    const mobile = document.getElementById('mobile');
    const message = document.getElementById('message');
    if(mobile.value.length!=10){
       
        mobile.style.borderColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "required 10 digits, match requested format!"
    }
    else{
        mobile.style.borderColor=goodcolor;
        message.innerHTML=""
    }
}

function checkpass(){
    // if (password.value ==""){
    //     passwordMessage.innerText="please fill the passward";
    //     passwordMessage.style.color = badColor;
    // }
    if ((password.value =="")||(cpassword.value=="")){
        ConfirmMessage.innerText="please fill the password";
        ConfirmMessage.style.color = badColor;
    }


    else if(password.value != cpassword.value){
        console.log("wrong password")
        ConfirmMessage.innerText=" ";
        passwordMessage.innerText="passwords doesn't match";
        passwordMessage.style.color = badColor;
    }else{
        console.log("right")
        passwordMessage.innerText=" "
    }
}

function validateEmail(){   
    if(!pattern.match(email.value)){
        console.log(email.target.value)
        emailmessage.innerText="invalid email";
    }
    
}

// function validateAge(DOB){
//     var today = new Date();
//     var birthDate = new Date(DOB);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     console.log("age",age)
//     const AgeMessage = document.getElementById('AgeMessage');
//     if (age<18){
//         AgeMessage.innerText="Age should be greater than 18";
//         AgeMessage.style.color = goodcolor
//     }
//     else{
//         AgeMessage.style.color = badColor

//     }
// }
const date = new Date();
const year = date.getFullYear();
function validateDate(){
    const userYear = parseInt(Birthday_date.value.split("-")[0]) //2022-05-06
    if((year-userYear)<18){
    console.log('too young')
    AgeMessage.innerText="Age should be greater than 18";
    AgeMessage.style.color = badColor;
    }
    else {
        console.log('correct')
    AgeMessage.innerText=" ";
    }
}

button.addEventListener('click',(e)=>{
    e.preventDefault();
    //password check
    checkpass();
    // contact check
    contactcheck();

    // emailcheck
    // validateEmail();

    validateDate();
   


})

