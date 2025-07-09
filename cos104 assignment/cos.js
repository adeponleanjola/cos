function calculate(num1, num2, sign) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return "Please provide valid numbers";
    }

    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '^':
            return num1 ** num2;
        case '%':
            return num1 % num2;
        default:
            return "Error: Invalid operation. Use +, -, *, ^, or %";
    }
}

function runningCalculator() {
    const num1 = document.getElementById('num1').value;
    const operation = document.getElementById('operation').value;
    const num2 = document.getElementById('num2').value;
    const resultDiv = document.getElementById('result');

    const result = calculate(num1, num2, operation);
    resultDiv.textContent = `The result is: ${result}`;
}