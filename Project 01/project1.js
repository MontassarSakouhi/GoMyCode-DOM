const question1 = document.querySelectorAll("input[name='question1']")
const question2 = document.querySelectorAll("input[name='question2']")
const question3 = document.querySelectorAll("input[name='question3']")



let result = 0
document.querySelector("#formu").addEventListener('submit', (e) => {
    e.preventDefault();
    question1.forEach(answer => {
        if ((answer.checked && answer.value) == "q1a3") { console.log(result += 1) }
    })
    question2.forEach(answer => {
        if ((answer.checked && answer.value) == "q2a2") { console.log(result += 1) }
    })
    question3.forEach(answer => {
        if ((answer.checked && answer.value) == "q3a1") { console.log(result += 1) }
    })
    alert(`you Have ${result} answer(s) RIGHT!!`)

})