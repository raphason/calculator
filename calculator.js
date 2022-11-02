const display = document.querySelector('.display');
display.textContent = "0";
var currentOperator = "";
const calculArray = [];

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        switch (this.className) {
            case "number":
                display.textContent == "0" || calculArray.length == 2 && display.textContent == calculArray[0] ?
                    display.textContent = this.textContent :
                    display.textContent += this.textContent;
                break;
            
            case "clear":
                display.textContent = 0;
                calculArray.splice(0, calculArray.length);
                break;
            
            case "operator":
                if (calculArray.length > 1) { //a previous calculation is in the queue
                    calculArray.push(display.textContent);
                    let newNumber = operate(calculArray[1], parseFloat(calculArray[0]), parseFloat(calculArray[2]));
                    calculArray.pop();
                    calculArray[0] = newNumber;
                    calculArray[1] = this.textContent;
                    display.textContent = newNumber.toString();
                }
                else if (calculArray.length == 1) { //a number is in the queue, ie. "=" has just been clicked
                    calculArray.push(this.textContent);
                }
                else { //no previous calculations are in the queue
                    calculArray.push(display.textContent);
                    calculArray.push(this.textContent);
                }
                break;
            
            case "equals":
                if (calculArray.length > 1) {
                    let newNumber = operate(calculArray[1], parseFloat(calculArray[0]), parseFloat(display.textContent));
                    calculArray.pop();
                    calculArray[0] = newNumber;
                    display.textContent = newNumber;
                }

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
        case 'x':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}