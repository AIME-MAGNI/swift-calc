currentValue = ''
currentOperator = ''

function updateDisplay(clickedButton) {
    let operationDisplay = document.querySelector(".operation-display");
    currentValue += clickedButton.textContent
    operationDisplay.textContent = currentValue
}

function setOperator(clickedButton) {
    let operationDisplay = document.querySelector(".operation-display");
    currentOperator = clickedButton.textContent
    currentValue += currentOperator
    operationDisplay.textContent = currentValue
}

function calculate() {
    let resultDisplay = document.querySelector(".result-display");
    results = eval(currentValue)
    resultDisplay.textContent = results
}

function clearDisplay() {
    let resultDisplay = document.querySelector(".result-display");
    let operationDisplay = document.querySelector(".operation-display");
    resultDisplay.textContent = ''
    operationDisplay.textContent = ''
    currentValue = ''
    currentOperator = ''
}
