/**
 * @author: Groupe Hackathon Cagnote
 * @description: Nous avons ici la page d'inscription dans laquelle nous allons gerer le formulaire d'inscription
 * 
 */

let VariableUserName = document.getElementById("username");
let Variablepassword = document.getElementById("password");
let ErrorMessageInput = document.querySelector(".Error-input");
let connexionButton = document.getElementById("Connexion");



//Champ email verification

VariableUserName.addEventListener("blur", function(e) {
    if(e.target.value.length == 0){
        VariableEmail.style.border = "2px solid red";
        document.querySelector("#error-username").style.display = "block";
    }
})

VariableUserName.addEventListener("focus", function(e) {
    if(e.target.value.length == 0){
        VariableUserName.style.border = "";
        document.querySelector("#error-username").style.display = "none";
    }
});


//Champ password verification

Variablepassword.addEventListener("blur", function(e) {
    if(e.target.value.length == 0){
        Variablepassword.style.border = "2px solid red";
        document.querySelector("#error-pass").style.display = "block";
    }
})

Variablepassword.addEventListener("focus", function(e) {
    if(e.target.value.length == 0){
        Variablepassword.style.border = "";
        document.querySelector("#error-pass").style.display = "none";
    }
})



/**

let formsubmit = document.getElementById('btn')
formsubmit.addEventListener('click',function(e) {

    e.preventDefault()
     
    let userobj={
        username : VariableUsername.value,
        mail : VariableEmail.value,
        password : btoa(Variablepassword.value),
        

     }
     let user = 'userinfo'+ VariableUsername.value  // "VariableUsername.value" à changer en userobj.username stp
     localStorage.setItem(user,JSON.stringify(userobj))
         return false;
        
})

 */

 connexionButton.addEventListener('click',e =>{
     let connetingUserName=VariableUserName.value;
     let connetingPwd=Variablepassword.value;
     let connexion=false;
     // Récupertration des donnés
    let userinfos = JSON.parse(localStorage.getItem(connetingUserName))
    console.log(userinfos);
   
    //Decoder le password
    let pwd = atob(userinfos.password)
    console.log(pwd)

    if ( connetingUserName=== userinfos.username && connetingPwd === pwd ){
        connexion=true;
        alert("Vous êtes connectez");
        sessionStorage.setItem("auth",connetingUserName); // Cette ligne nous permet de recuperer la nom de l'utilisateur dans la nouvelle page
        window.location.href = 'C:\Users\DELL\Downloads\OBI\Devlabs\DI_Bootcamp\DI_Bootcamp\HACKATON\DI-Bootcamp-Hackathon1-Html-CSS-JS-Cagnotte/test.html';
            
    } else {
        alert("Votre login ou mot de passe est incorrect")
    }


//Empêcher l'envoie du formulaire
    return false;

 })

 