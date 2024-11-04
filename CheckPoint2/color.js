function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.querySelector("#change").addEventListener('click',()=>{
    let color=getRandomColor();
    document.querySelector('#container').innerText=`${color}`;
    document.querySelector("body").style.backgroundColor=`${color}`


})