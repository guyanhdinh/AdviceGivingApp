
let number = document.getElementById("adviceNumber");
let quote = document.getElementById("quote");

let randomNumber = 0;

function askAdvice() {
    randomNumber = Math.random()*240;
    randomIdNumber = Math.floor(randomNumber);

    fetch("https://api.adviceslip.com/advice/" + randomNumber)
    .then((res) => res.json())
    .then((res) => {
        let object = res.slip;
        let adviceId = object.id;
        let adviceQuote = object.advice;

        number.innerText = adviceId;
        quote.innerText = '"'+adviceQuote +'"';
    })
};