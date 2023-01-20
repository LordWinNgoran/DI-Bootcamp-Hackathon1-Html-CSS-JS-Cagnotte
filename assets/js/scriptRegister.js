/**********************************************************************************/
/********************************* HACKATHON 1 HTML CSS JS  *******************/
/********************************************************************************/


/**
 * @author: Group Cagnotte pour un champion
 * @description: Ce projet est un jeu où le gagnant repart avec 
 * un prix en fonction du nombre de points obtenus. 
 * Date : 19/01/2023
 */

/************************ Structure of Game************************************ */


let VariableUsername = document.getElementById("username");
let VariableEmail = document.getElementById("email");
let Variablepassword = document.getElementById("password");
let Variableconfirmpassword = document.getElementById("confirmpassword");
let ErrorMessageInput = document.querySelector(".Error-input");

//Champ username verification

VariableUsername.addEventListener("blur", function(e) {
    if(e.target.value.length == 0){
        VariableUsername.style.border = "2px solid red";
        document.querySelector("#error-username").style.display = "block";
    }else{
        console.log(VariableUsername.value)
    }
})
VariableUsername.addEventListener("focus", function(e) {
    if(e.target.value.length == 0){
        VariableUsername.style.border = "";
        document.querySelector("#error-username").style.display = "none";
    }else{
        console.log(VariableUsername.value)
    }
})


//Champ email verification

VariableEmail.addEventListener("blur", function(e) {
    if(e.target.value.length == 0){
        VariableEmail.style.border = "2px solid red";
        document.querySelector("#error-email").style.display = "block";
    }else{
        console.log(VariableUsername.value)
    }
})

VariableEmail.addEventListener("focus", function(e) {
    if(e.target.value.length == 0){
        VariableEmail.style.border = "";
        document.querySelector("#error-email").style.display = "none";
    }else{
        console.log(VariableUsername.value)
    }
})


//Champ password verification

Variablepassword.addEventListener("blur", function(e) {
    if(e.target.value.length == 0){
        Variablepassword.style.border = "2px solid red";
        document.querySelector("#error-pass").style.display = "block";
    }else{
        console.log(VariableUsername.value)
    }
})

Variablepassword.addEventListener("focus", function(e) {
    if(e.target.value.length == 0){
        Variablepassword.style.border = "";
        document.querySelector("#error-pass").style.display = "none";
    }else{
        console.log(VariableUsername.value)
    }
})


//Champ confirmpassword verification

Variableconfirmpassword.addEventListener("blur", function(e) {
    if(e.target.value.length == 0){
        Variableconfirmpassword.style.border = "2px solid red";
        document.querySelector("#error-confimpass").style.display = "block";
    }else{
        console.log(VariableUsername.value)
    }
})
Variableconfirmpassword.addEventListener("focus", function(e) {
    if(e.target.value.length == 0){
        Variableconfirmpassword.style.border = "";
        document.querySelector("#error-confimpass").style.display = "none";
    }else{
        console.log(VariableUsername.value)
    }
})


/* Gerer le bouton Inscription */

let formsubmit = document.getElementById('btn')
formsubmit.addEventListener('click',function(e) {

    e.preventDefault()
    
    /* Verifier les champs avant l'inscription */

    if((Variablepassword.value == Variableconfirmpassword.value) && VariableEmail.value.length != 0 && VariableUsername.value.length != 0 && Variablepassword.value.length != 0 && Variableconfirmpassword.value.length != 0){
        
        //Creer un objet pour stocker les donnees 
        let userobj={
            username : VariableUsername.value,
            mail : VariableEmail.value,
            password : btoa(Variablepassword.value),
            nombreChance : 0,
            IsAuth : false,
         }
        

        let user = VariableUsername.value 
        localStorage.setItem(user,JSON.stringify(userobj))
        document.querySelector("#span-succes").style.display = "block";
        document.querySelector("#span-error").style.display = "none";
        //Redirection vers login
        window.location.href = 'file:///D:/Formation-ATOS/Atos/Hackathon1/Winner%20Price/html/login.html';
            
        return false;


    } 

    else {
        document.querySelector("#span-error").style.display = "block";
        document.querySelector("#span-succes").style.display = "none";
    }   
    
        
})
