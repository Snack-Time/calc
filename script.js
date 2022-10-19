/* Query Selectors */

const calcContainer = document.querySelector("#calculator-container");
const displayContainer = document.querySelector("#display-container");
const btnContainer = document.querySelector("#button-container");
const numBtn = document.querySelectorAll(".numButton");
const opBtn = document.querySelectorAll(".operatorButton");
const oldOperandDisplay = document.querySelector("#oldOperand");
const newOperandDisplay = document.querySelector("#newOperand");
let oldNum = "";
let newNum = "";
let holderNum = "";
let operator = null;

function operate(operator, numOne, numTwo) {
    switch (operator) {
        case '+':
            add(numOne, numTwo);
            return;
        case '-':
            subtract(numOne, numTwo);
            return;
        case '*':
            multiply(numOne, numTwo);
            return;
        case '%':
            if (numTwo === 0) {
                alert("You can't divide by zero!")
                return null; }
            else {
                return divide(numOne, numTwo)};
            };

};

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

numBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (newOperandDisplay.textContent.includes(".") && button.textContent === ".") return;
        appendNumber(button.textContent);
    });
});



opBtn.forEach((button) => {
    button.addEventListener("click", () => {
        appendOperation(button.textContent);
    });
});

function appendNumber(button) {
    newNum = newNum.toString() + button.toString();
    newOperandDisplay.textContent = newNum;
}

function appendOperation(button) {
    operator = button;
    oldOperandDisplay.textContent = `${newNum} ${operator}`;
    newNum = oldNum;
    newNum = "";
};