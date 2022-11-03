const calculatorScreen = document.querySelector('.display');
const equationScreen = document.querySelector('.equation');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const backSpace = document.querySelector('.backspace');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

var calc = {
    firstOperand: null, 
    operator: null, 
    secondOperand: null, 
}

numberButtons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        appendNumber(this.textContent);
    });
});

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        if (calc.operator && calc.secondOperand) {
            calc.firstOperand = calculate();
            calc.secondOperand = null;    
            calculatorScreen.textContent = calc.firstOperand;
        }
        calc.operator = this.textContent;
        equationScreen.textContent = calc.firstOperand + " " + calc.operator + " ";
    });
});

clearButton.addEventListener('click', function(e) {
    for (data in calc) {
        calc[data] = null;
    }
    calculatorScreen.textContent = "0";
    equationScreen.textContent = "";
});

equalsButton.addEventListener('click', function(e) {
    if (calc.operator && calc.secondOperand) {
        calc.firstOperand = calculate();
        calculatorScreen.textContent = calc.firstOperand;
        equationScreen.textContent = calc.firstOperand;
        calc.operator = null;
        calc.secondOperand = null;
    }
});

backSpace.addEventListener('click', function(e) {
    if (calc.operator && calc.secondOperand) {
        calc.secondOperand = null;
        calculatorScreen.textContent = "";
        equationScreen.textContent = calc.firstOperand + " " + calc.operator;
    }
    else if (calc.firstOperand) {
        calc.firstOperand = null;
        calc.operator = null;
        equationScreen.textContent = "";
    }
    calculatorScreen.textContent = "";
});

function appendNumber(num) {
    if (!calc.operator && !calc.secondOperand) {
        calc.firstOperand == null ? calc.firstOperand = num : calc.firstOperand += num;
        calculatorScreen.textContent = calc.firstOperand;
        equationScreen.textContent = calc.firstOperand;
    }
    else if (calc.firstOperand && calc.operator) {
        calc.secondOperand == null ? calc.secondOperand = num : calc.secondOperand += num;
        calculatorScreen.textContent = calc.secondOperand;
        equationScreen.textContent = calc.firstOperand + " " + calc.operator + " " + calc.secondOperand;
    }
}

function calculate() {
    if (calc.operator == "÷" && calc.secondOperand == "0") {
        alert("You can't divide by 0! Please clear to prevent any errors.");
        return "0";
    }
    else {
        return Math.round(operate(calc.operator, parseFloat(calc.firstOperand), parseFloat(calc.secondOperand)).toString() * 10000000) / 10000000;
    }
    
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(o, a, b) {
    switch (o) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}