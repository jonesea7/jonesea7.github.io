//build the object that is the calculator
const Calculator = {
    calcScreenValue: '0',
    operand1: null,
    readyOperand2: false,
    operator: null,
};



//create function that will update display when calc-keys are pushed
function inputDigit(digitPressed) {
    const {calcScreenValue, readyOperand2} = Calculator;
    if (readyOperand2 === true) {
        Calculator.calcScreenValue = digitPressed;
        Calculator.readyOperand2 = false;
    } else {
        Calculator.calcScreenValue = calcScreenValue === "0" ? digitPressed : calcScreenValue + digitPressed;
    }
}

//what shall we do about decimal points
function inputDecimal(decimalPoint) {
    if (Calculator.readyOperand2 === true) return;
    if (Calculator.calcScreenValue.includes(decimalPoint)) {
        Calculator.calcScreenValue += decimalPoint; //will add to and include the decimal point to operand
    }
}

//what to do with the operators
function useOperator(nextOperator) {
    const {operand1, calcScreenValue, operator} = Calculator;
    const parsedInputValue = parseFloat(calcScreenValue); //I feel like this should have been established earlier?
    if (operator && Calculator.readyOperand2) {
        Calculator.operator = nextOperator;
        return;
    }
    if (operand1 == null) {
        Calculator.operand1 = parsedInputValue;
    } else if (operator) {
        const currentValue = operand1 || 0;
        let result = performCalculation[operator](currentValue, parsedInputValue);
        result = Number(result).toFixed(9); //fixes the amount of zeros after decimal
        result = (result*1);
        Calculator.calcScreenValue = String(result);
        Calculator.operand1 = result;
    }
    Calculator.readyOperand2 = true;
    Calculator.operator = nextOperator;
}

//performCalculation() it was after useOperator() in tutorial

const performCalculation = {
    '/': (operand1, operand2) => operand1 / operand2,
    '*': (operand1, operand2) => operand1 * operand2,
    '+': (operand1, operand2) => operand1 + operand2,
    '-': (operand1, operand2) => operand1 - operand2,
    '=': (operand1, operand2) => operand2
}

//reset the calculator
function calculatorReset() {
    Calculator.calcScreenValue = '0';
    Calculator.operand1 = null;
    Calculator.readyOperand2 = false;
    Calculator.operator = null;
}

function updateCalcScreen () {
    const display = document.querySelector('.calc-screen');
    display.value = Calculator.calcScreenValue;
}



updateCalcScreen();

const calcButtons = document.querySelector('.calculator-buttons');
calcButtons.addEventListener('click', (event) => {
        const {target} = event;
        if (!target.matches('button')) {
            return;
        }

        if (target.classList.contains('operator')) {
            useOperator(target.value);
            updateCalcScreen();
            return;
        }

        if (target.classList.contains('decimal-function')) {
            inputDecimal(target.value);
            updateCalcScreen();
            return;
        }

        if (target.classList.contains('all-clear-function')) {
            calculatorReset();
            updateCalcScreen();
            return;
        }

        if (target.classList.contains('equal-sign-operator')) { //had to add this because it was a different class in my html
            useOperator(target.value);
            updateCalcScreen();
            return;
        }


        inputDigit(target.value);
        updateCalcScreen();
    })
