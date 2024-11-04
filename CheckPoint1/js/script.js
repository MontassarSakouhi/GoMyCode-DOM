

document.querySelectorAll('.card-body').forEach(card => {
    const plus = card.querySelector('.fa-plus-circle');
    const minus = card.querySelector('.fa-minus-circle');
    const quantity = card.querySelector('.quantity');
    const trash = card.querySelector('.fa-trash-alt');
    const like = card.querySelector('.fa-heart');
    const price = card.querySelector('.unit-price')
    const total = document.querySelector(".total")
    plus.addEventListener("click", () => {
        quantity.innerText = eval(quantity.innerText + "+0.5")
        total.innerText = quantity.innerText * parseFloat(price.innerText) // .........

    })

    minus.addEventListener("click", () => {
        if (quantity.innerText != 0) {
            quantity.innerText = eval(quantity.innerText + "-0.5")
        }
    })
    trash.addEventListener("click", () => {

        card.remove()
    })
    like.addEventListener("click", () => {
        if (!like.classList.contains("red")) { like.classList.add("red") }

        //  else {like.classList.toggle('red');} doenst work ..

        console.log(like.classList.contains("red"))
    })


})




window.addEventListener("mousedown", (e) => {
    console.log(e.button)
})