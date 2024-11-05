
const p1but=document.querySelector("#p1Button")
const p2but=document.querySelector("#p2Button")
const p2disp=document.querySelector("#p2Display")
const p1disp=document.querySelector("#p1Display")
const reset=document.querySelector('#reset')
const maxscore=document.querySelector('#playto')

p1but.addEventListener('click',()=>count("#p1Display"))
p2but.addEventListener("click",()=>count("#p2Display"))


let count=(abc)=>{
    const display = document.querySelector(abc);
    if( display.innerText<maxscore.value){
        display.innerText++
    }
    if(display.innerText==maxscore.value)
    {
        display.style.color="green"
        p1but.disabled=true
        p2but.disabled=true
    }

    if(p1disp.style.color=="green"){p2disp.style.color="red"}
    if(p2disp.style.color=="green"){p1disp.style.color="red"}
}

reset.addEventListener('click',()=>resetF())
let resetF=()=>{
    p1but.disabled=false
        p2but.disabled=false
        p2disp.innerText="0"
        p1disp.innerText="0"
        p1disp.style.color="black"
        p2disp.style.color="black"}
    

