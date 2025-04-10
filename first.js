// const form = document.querySelector('form');

// kaafi saare event  hote hai:-
// 1.click, 2.input, 3.change, 4.
// form.addEventListener('input', (event) => {
//     console.log(event.target.value);
// })

// change:- jaise hi inputfield mei type kerke bahar click krunga turant print ho jayega
// form.addEventListener('change', (event) => {
//     console.log(event.target.value);
// })

// focus: dose'nt follow the bubbling 

// form.addEventListener('focus', (event) => {
//     console.log(event.target.value);
// })

// focusin: ye same work focus ki tarah but ye bubble hoga
// form.addEventListener('focusin', (event) => {
//     console.log(event.target.value);
// })

// focusout: ye focusout bubbling follow nahi kerta hai 
// form.addEventListener('focusout', (event) => {
//     console.log(event.target.value);
// })

// click:- click kerne ke print hoga
// form.addEventListener('click', (event) => {
//     console.log("single click");
// })

// click:- click kerne ke print hoga

// form.addEventListener('dbclick', (event) => {
//     console.log("double click");
// })

// submit: kerne se page refresh ho jaata hai jo memory saare release ho jati hai
// check kerne ke liye (preserve log laga lenge (setting icon se))

// form.addEventListener('submit', (event) => {
//     // console.log(event.target.value);
//     console.log("form submitted!");
// })

// reset : ess se page refresh nahi hota balki(saare values empty ho jaati hai)
// form.addEventListener('reset', (event) => {
//     // console.log(event.target.value);
//     console.log("form reset!");
// })

//############### All values ka access kaise le #####################
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const first = document.getElementById('first');
    console.log(first.value);
    const second = document.getElementById('second');
    console.log(second.value);
    const third = document.getElementById('third');
    console.log(third.value);

    const result = document.getElementById('result');
    result.innerText = `${first.value} ${second.value} is a good boy. age is ${third.value}`;
    document.body.append(result);
})