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
    console.log("Calculator");
    
    const num1 = prompt("Enter the first number: ");
    const operation = prompt("Enter the operation (+, -, *, ^, %): ");
    const num2 = prompt("Enter the second number: ");

    const result = calculate(num1, num2, operation);
    alert(`The result is: ${result}`);
}

runningCalculator();