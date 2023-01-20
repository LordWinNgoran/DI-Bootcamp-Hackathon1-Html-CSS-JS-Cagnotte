
// we take the name on the session storage
let userName = sessionStorage.getItem('auth');



//we check if the user is connected
if(localStorage.getItem(userName)){
    alert('ok')
}else{
    alert('non ok')
}

//for the mental calcul we need a number
let number=prompt('Please give us your favorite number')
number=parseInt(number)
//Random of the number
let rand=Math.floor(Math.random() *number)+1;
let calcul =((rand**2)*2+10)/2

//
document.querySelector('h6').textContent="What's the result of: (("+rand+"^2)*2+10)/2"


console.log('random',rand,'calcul',calcul)
console.log("The rand"+rand)


let button=document.querySelector('button')



button.addEventListener('click',(e)=>{
    e.preventDefault()
    let input = document.querySelector('input').value
    
    let stockUserinfo=JSON.parse(localStorage.getItem("cyrillengoran"))
      

    if(input==calcul){
        alert("Bravo vous avez trouvé en 50 secondes vous avez 2 chances ")
        stockUserinfo.nombreChance=2
        console.log(stockUserinfo.password)
        document.body.remove(document.getElementById('register'))
    }else{
        alert("Désolé vous n'avez pas trouvé mais vous avez une chance de remporter un prix ")
        stockUserinfo.nombreChance=1
        console.log(stockUserinfo.nombreChance)
        document.body.remove(document.getElementById('register'))
    }
    console.log("Voici le number "+ input)
})





console.log(arrayQuestion)



    //    let userobj={
    //         username : usernamevalue,
    //         mail : email,
    //         password : btoa(password)
    //     }
    //     localStorage.setItem('userinfo',JSON.stringify(userobj))
    //     return false;

