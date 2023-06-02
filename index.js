const signUpLink=document.getElementById('signup-link');
const LoginLink=document.getElementById('login-link');
const profileLink=document.getElementById('profile-link');
const mycartLink=document.getElementById('mycart-link');

const firstName=document.getElementById('firstname');
const lastName=document.getElementById('lastname');

const emailId=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password-2');
const signupbutton=document.getElementById('signup-btn');
const loginbutton=document.getElementById('login-btn');
const errorText=document.getElementById('error-text');
const successText=document.getElementById('error-text');

function checkMail(email){
 
}
function generateToken(){
    const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
    let res= '';
    let length=characters.length;
    for(let i=0;i<=16;i++){
        res+=characters.charAt(Math.floor(Math.random()*length));
    }
    return res;
}
signupbutton.addEventListener("click",(event)=>{
event.preventDefault();
if(fullName.value==""||emailId.value==""||password.value==""||password2.value==""){
    errorText.innerHtml='All fileds are mandatory';
    return;
}
if(password.value.length<8){
    errorText.innerHtml="Passwords must be greater than 8";
    password.focus();
    return;
}
if(password.value!=password2.value){
    errorText.innerHtml="passwords donot match";
    password2.focus();
    return;
}
errorText.innerHtml=``;
let users={
    fullName:fullName.value,
    emailId:emailId.value,
    token:generateToken(),
}
localStorage.setItem('user',JSON.stringify(users));
successText.innerHTML=`Successfully signed up`;

const link=document.createElement('a');
link.href='./profile.html';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});

profileLink.addEventListener('click',()=>
{
    if(!localStorage.getItem('user')){
        profileLink.href="#";
        alert("you don't havr an account, signup first");
    }
    else{
        profileLink.href='./profile.html';
    }

});
signUpLink.addEventListener('click',()=>{
    if(localStorage.getItem('user')){
        signUpLink.href="#";
        alert("you already have an account, go to profile");
    }else{
        signUpLink.href='./index.html';
    }
});


