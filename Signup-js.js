
var patternuser = /^[a-z\d_]{3,25}$/;
var patternemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
var  patternpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


var username=document.getElementById("username");
var email=document.getElementById("email");
var pass=document.getElementById("password");
var passrepet=document.getElementById("passwordrepet");
var  button=document.getElementById("sinup");


 function uservalidation(){
    let valid=false;
    if(username.value.match(patternuser)){
        username.style="outline: solid 5px rgb(70, 193, 70);";
        document.getElementById("U").style="display: none;";
        valid=true;
        
    }else{
        username.style="outline: solid 5px red;";
        document.getElementById("U").style="display: block;";
    }

    return valid;

 }   

 function mailvalidation(){
    valid=false;
    if(email.value.match(patternemail)){
        email.style="outline: solid 5px rgb(70, 193, 70);";
        document.getElementById("E").style="display: none;";
        valid=true;
    }else{
        email.style="outline: solid 5px red;";
        document.getElementById("E").style="display: block;";
    }

    return valid;
 }  

 function passvalidation(){
    valid=false;
    if(pass.value.match(patternpass)){
        pass.style="outline: solid 5px rgb(70, 193, 70);";
        document.getElementById("P").style="display: none;";
        valid=true;
    }else{
        pass.style="outline: solid 5px red;";
        document.getElementById("P").style="display: block;";
    }

    return valid;

 } 
 
 function passrepvalidation(){
    valid=false;
    if(passrepet.value === pass.value){
        passrepet.style="outline: solid 5px rgb(70, 193, 70);";
        document.getElementById("PR").style="display: none;";
        valid=true;
    }else{
        passrepet.style="outline: solid 5px red;";
        document.getElementById("PR").style="display: block;";
    }

    return valid;

 } 

 function btnclick(){
    if(uservalidation() && mailvalidation() && passvalidation() && passrepvalidation()){
        window.location.href="index-2.html";
    }
 }
button.addEventListener("click",btnclick);

 