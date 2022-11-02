const display = document.querySelector('.display');
var displayValue = 0;
var currentOperator = "";

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        switch (this.className) {
            case "number":
                displayValue == 0 ?
                display.textContent = this.textContent :
                display.textContent += this.textContent;
                displayValue = parseInt(display.textContent);
                break;
            
            case "clear":
                display.textContent = 0;
                displayValue = 0;
                break;
            
            case "operator":
                currentOperator = this.textContent;
                break;
            
            
        }
    });
});

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
        case '*':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}