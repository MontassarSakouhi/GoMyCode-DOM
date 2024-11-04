const afficheur=document.querySelector("#afficheur")
const buttons=document.querySelectorAll(".buttons")

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        afficheur.innerText+=button.innerText
    })
   

})

document.querySelector(".result").addEventListener('click',()=>{
    afficheur.innerText=eval(afficheur.innerText)
})
document.querySelector("#clear").addEventListener('click',()=>{
    afficheur.innerText=""
})