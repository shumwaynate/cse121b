/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1+number2
}
function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value= add(addNumber1,addNumber2)

}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1-number2
}
function subtractNumbers(){

    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value= subtract(subtract1,subtract2)

}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2)=> factor1 * factor2;
const multiplyNumbers =()=>{
let factor1 = Number(document.querySelector('#factor1').value);
let factor2 = Number(document.querySelector('#factor2').value);
document.querySelector('#product').value= multiply(factor1,factor2)};

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor)=> dividend / divisor;
const divideNumbers =()=>{
let dividend = Number(document.querySelector('#dividend').value);
let divisor = Number(document.querySelector('#divisor').value);
document.querySelector('#quotient').value= divide(dividend,divisor)};

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);


/* Decision Structure */
const total = (subtotal, membership)=> subtotal * membership;
const getTotal =()=>{
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membership = 1;
    if (Number(document.querySelector('#member').checked)){
        membership = 0.80;
    }
    let calculatedTotal = total(subtotal,membership)
    
    let formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(calculatedTotal);

    document.querySelector('#total').textContent = formattedTotal;
};

document.querySelector('#getTotal').addEventListener('click',getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arrayAsString = numbersArray.join(', ');
document.getElementById('array').textContent = arrayAsString;

/* Output Odds Only Array */
let arrayB = numbersArray.filter(number=>number % 2 != 0)
let arrayAsString2 = arrayB.join(', ');
document.getElementById('odds').textContent = arrayAsString2;

/* Output Evens Only Array */
let arrayC = numbersArray.filter(number=>number % 2 === 0)
let arrayAsString3 = arrayC.join(', ');
document.getElementById('evens').textContent = arrayAsString3;

/* Output Sum of Org. Array */
let arrayD = numbersArray.reduce((sum,number) => sum+ number,0)
document.getElementById('sumOfArray').textContent = arrayD;

/* Output Multiplied by 2 Array */
let arrayE = numbersArray.map(number => number* 2);
let arrayAsString4 = arrayE.join(', ');
document.getElementById('multiplied').textContent = arrayAsString4;

/* Output Sum of Multiplied by 2 Array */
let arrayF = arrayE.reduce((sum,number) => sum+ number,0)
document.getElementById('sumOfMultiplied').textContent = arrayF;