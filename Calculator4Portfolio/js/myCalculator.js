//universal var set, which may be an object maybe, can I do it without an object
const Calculator = {
    calcDisplayValue: '0',
    operand1: null,
    operand2: null,
    readyOperand2: false,
    operator: null
};

//function inputDigit()
function inputDigit() {
    
    //'let' value from the <button> and assign to operand1
    Calculator.operand1 = document.getElementById('button-7').value;

    //operand1 turn it toString() and updateCalcDisplay()
    
};


//addNumberToCalcScreen
/*function addNumberToCalcScreen() {
    document.getElementsByClassName('calc-screen').innerHTML = document.getElementsByTagName('button').value;
}
 

//function beginCalc() "onkeydown only on the numbered buttons call beginCalc()"
function beginCalc() {

    //take first operand which must include decimal and end at operator because you need to punch in multiple numbers
    const calcButtons = document.querySelectorAll('.calculator-buttons');
        calcButtons.addEventListener('click', addNumberToCalcScreen());
    //take operator and put in var container
    //take second operand put in var container
    //if operand1/operator/operand2 !null && '=' is pushed and perform function calculate()
}
function calculate() NOTE: should be built before function beginCalculation
    return the result of operand1 used with the operator against operand2
    

    
//function allClear()
    //user display back to zero
    //operand1 and 2 back to null
    //operator null
*/