const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", getTime);

function getTime() {
startBtn.disabled = true;

const timer = 5;
let amountTime = timer * 60;

function calculateTime() {
const countdown = document.querySelector(".countdown");

let minutes = Math.floor(amountTime / 60);
let seconds = amountTime%60;

if (minutes < 10) {
    minutes = "0" + minutes;
}

if (seconds < 10) {
    seconds = "0" + seconds;
}

countdown.textContent = `${minutes} : ${seconds}`;
amountTime --;

if(amountTime < 0) {
    stopTimer();
    amountTime = 0;
    startBtn.disabled = false;
    document.querySelector(".endSound").play();
}

function stopTimer() {
    clearInterval(timerId);
}
}

let timerId = setInterval(calculateTime, 1000);
}

const unorderedIngredients = document.querySelector(".unorderedIngredients");
const ingredients = document.querySelector(".ingredients");
ingredients.addEventListener("click", () => {
    unorderedIngredients.classList.toggle("showIngredients");
    document.querySelector('#ingredientsArrow').classList.toggle("rotate");
})

const orderedInstructions = document.querySelector(".orderedInstructions");
const cooking = document.querySelector(".cooking");
cooking.addEventListener("click", () => {
    orderedInstructions.classList.toggle("showInstructions");
    document.querySelector('#instructionsArrow').classList.toggle("rotate");
})