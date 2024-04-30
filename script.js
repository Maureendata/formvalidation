let nameError=document.getElementById("name-error");
let phoneError=document.getElementById("phone-error");
let emailError=document.getElementById("email-error");
let messageError=document.getElementById("message-error");
let submitError=document.getElementById("submit-error");

function validateName(){
    let name=document.getElementById("contact-name").value;
    if(name.length==0){
nameError.innerHTML="Enter your full name";
return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Full name is required";
        return false;
    }
    nameError.innerHTML="valid";
    return true;
}
function validatePhone(){
    let phone=document.getElementById("contact-phone").value;
    if(phone.length==0){
        phoneError.innerHTML="Phone number is required";
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML="Phone number should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Phone number should not contain digits";
        return false;
    }
    phoneError.innerHTML="valid";
    return true;
}
function validateEmail(){
    let email=document.getElementById("contact-email").value;
    if(email.length==0){
        emailError.innerHTML="Enter  email";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = "Enter a valid email";
        return false;
    }   
    emailError.innerHTML="valid";
    return true;
}
function validateMessage(){
    let message=document.getElementById("contact-message").value;
    var required=30;
    let left=required-message.length;
    if(left>0){
        messageError.innerHTML=left+" characters left.";
        return false;
    }
    messageError.innerHTML='valid';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() ||!validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML="Please fix the error";
        setTimeout(()=>{
            submitError.style.display='none';  
        },5000);
        return false;
    }
}