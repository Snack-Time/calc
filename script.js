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
            if (b === 0) {
                return null; }
            else {
                return divide(numOne, numTwo)};
            }

}

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}