function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let value of arr) {
    if (min > value) {
      min = value;
    }

    if (max < value) {
      max = value;
    }

    sum += value;
  }
  let avg = +((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}


function makeWork (arrOfArr, func) {
  let max = 0;
  let value = 0;

  for (let arr of arrOfArr) {
    value = func(arr);
    if (max < value) {
      max = value;
    }
  }

  return max;
}
  

function summElementsWorker(...arr) {
  const newArray = arr.flat();
  let sum = 0;
  for (let value of newArray) {
    sum += value;
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  const newArray = arr.flat();
  let min = newArray[0];
  let max = newArray[0];
    
  for (let value of newArray) {
    if (min > value) {
       min = value;
    }

    if (max < value) {
      max = value;
    }
  }
  
  const difference = max - min;
  return difference ? difference : 0;
}

function differenceEvenOddWorker(...arr) {
  const newArray = arr.flat();
  let evenSum = 0;
  let oddSum = 0;

  for (let value of newArray) {
   if(value % 2 === 0) {
     evenSum += value;
    }

   if(value % 2 === 1) {
     oddSum += value;
   }
  }

  const differenceEvenOdd = evenSum - oddSum;
  return differenceEvenOdd ? differenceEvenOdd : 0;
}

function averageEvenElementsWorker(...arr) {
  const newArray = arr.flat();
  let evenSum = 0;
  let count = 0;
  for (let value of newArray) {
    if(value % 2 === 0) {
      evenSum += value;
      count++;
    }
  }
  
  const averageEvenElements = evenSum / count;
  return averageEvenElements ? averageEvenElements : 0;
}

