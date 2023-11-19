/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function declaration for the add function
function add(number1, number2) {
    const sum = number1 + number2;
    return sum;
  }
  
  function addNumbers() {

    const num1 = parseInt(document.getElementById('add1').value);
    const num2 = parseInt(document.getElementById('add2').value);
  
    const sum = add(num1, num2);
  
    document.getElementById('sum').value = sum;
  }
  
  document.getElementById('addNumbers').addEventListener('click', addNumbers);
  

/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2) {
  const difference = subtract1 - subtract2;
  return difference;
}

function subtractNumbers() {

  const subtract1 = parseInt(document.getElementById('subtract1').value);
  const subtract2 = parseInt(document.getElementById('subtract2').value);
  
  const difference = subtract(subtract1, subtract2);
  
  document.getElementById('difference').value = difference;
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (multiply1, multiply2) => {
  const product = multiply1 * multiply2;
  return product;
}

const multiplyNumbers = () => {

  const multiply1 = parseInt(document.getElementById('factor1').value);
  const multiply2 = parseInt(document.getElementById('factor2').value);

  // console.log("multiply1", multiply1)
  // console.log("multiply2", multiply2)
  
  const product = multiply(multiply1, multiply2);
  
  document.getElementById('product').value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
  const quotient = dividend / divisor;
  return quotient;
}

function divideNumbers() {

  const dividend = parseInt(document.getElementById('dividend').value);
  const divisor = parseInt(document.getElementById('divisor').value);
  
  const quotient = divide(dividend, divisor);
  
  document.getElementById('quotient').value = quotient;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', getTotalDue);

function getTotalDue() {
    const subtotal = parseFloat(document.getElementById('subtotal').value);

    const isMember = document.getElementById('member').checked;

    const discount = isMember ? 0.15 : 0;

    const totalDue = subtotal * (1 - discount);

    document.getElementById('total').textContent = `$${totalDue.toFixed(2)}`;
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
let oddsArray = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = oddsArray;

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
