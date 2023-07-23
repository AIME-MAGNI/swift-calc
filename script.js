let currentOperation = '';
let currentResult = '';
let currentOperator = '';

function updateDisplay(button) {
    const value = button.innerText;
    currentOperation += value;
    updateScreen();
}

function updateScreen() {
    const screenDisplay = document.querySelector('.operation-display');
    screenDisplay.textContent = currentOperation;
}

function showResults() {
    const screenDisplay = document.querySelector('.result-display');
    screenDisplay.textContent = currentOperation;
}

function calculate() {
    currentResult = eval(currentOperation);
    currentOperation = currentResult.toString();
    showResults();
}

function clearDisplay() {
    currentOperation = '';
    currentResult = '';
    updateScreen();
}

function setOperator(button) {
    currentOperator = button.innerText;
    currentOperation += currentOperator;
    updateScreen();
}

function backspace() {
    currentOperation = currentOperation.slice(0, -1);
    updateScreen();
}
