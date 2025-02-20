let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function appendCharacter(char) {
    display.value += char;
    playSound();
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
        addToHistory(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculateSin() {
    display.value = Math.sin(eval(display.value) * (Math.PI / 180));
}

function calculateCos() {
    display.value = Math.cos(eval(display.value) * (Math.PI / 180));
}

function calculateTan() {
    display.value = Math.tan(eval(display.value) * (Math.PI / 180));
}

function calculateLog() {
    display.value = Math.log10(eval(display.value));
}

function calculateExp() {
    display.value = Math.exp(eval(display.value));
}

function calculateFactorial() {
    let num = parseInt(display.value);
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    display.value = fact;
}

function addToHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
}

function resetHistory() {
    historyList.innerHTML = "";
}

function playSound() {
    let audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4382");
    audio.play();
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    if (event.key >= 0 && event.key <= 9 || "+-*/().".includes(event.key)) {
        appendCharacter(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});