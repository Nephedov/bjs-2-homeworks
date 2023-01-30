"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;

  if (d == 0) {
    arr[0] = (-b/(2*a));
  }

  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  
  return arr;
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonth) {
  if (typeof percent !== 'number') {
    console.log(`Параметр ${percent} содержит неправильное значение ${(typeof percent)}`);
    return false;
  }

  if (typeof contribution !== 'number') {
    console.log(`Параметр ${contribution} содержит неправильное значение ${(typeof contribution)}`);
    return false;
  }

  if (typeof amount !== 'number') {
    console.log(`Параметр ${amount} содержит неправильное значение ${(typeof amount)}`);
    return false;
  }

  if (typeof countMonth !== 'number') {
    console.log(`Параметр ${countMonth} содержит неправильное значение ${(typeof countMonth)}`);
    return false;
  }

  
  let settlementAmount  = amount - contribution;
  let payment = calculatePayment(settlementAmount, countMonth, percent);
  let resultSum = payment * countMonth;

  return +resultSum.toFixed(2);
  
}


function calculatePayment(sum, month, percent) {
  let index = percent / 12 / 100;                            
  let exponentiate = Math.pow((1 + index), month);        
  let coefficient = index * exponentiate / (exponentiate - 1);
  let payment = (coefficient * sum);                   

  return payment;
}



function getMonthDifference(date) {
let today = new Date();

let diff = (date.getDate() - today.getDate()) / 30 +
  date.getMonth() - today.getMonth() +
  (12 * (date.getFullYear() - today.getFullYear()));
return Math.trunc(diff);
}



let percentInput = +prompt("Введите процент: ");
let contributionInput = +prompt("Введите сумму первоначального взноса: ");
let amountInput = +prompt("Введите сумму кредита: ");
let dateInput = new Date (prompt ('Введите дату окончания кредита в формате YYYY-MM-DD: ',''));
let myDate = getMonthDifference(dateInput);
 console.log(calculateTotalMortgage(percentInput, contributionInput, amountInput, myDate));
