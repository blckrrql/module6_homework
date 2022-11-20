let evenNums = 0;
let oddNums = 0;
let nulls = 0;

let arr = [2, 4, null, 58, 'hello', undefined, null, 59, 627, 34, 4, 0];

function OddEvenNums () {
  for (let i = 0; i < arr.length; i ++) {
  if ((typeof arr[i] == 'number' || typeof arr[i] == 'bigInt') && !(isNaN(arr[i])) && (arr[i] !== 0) && (arr[i] % 2 == 0)) {
    evenNums ++;
  } else if ((typeof arr[i] == 'number' || typeof arr[i] == 'bigInt') && (arr[i] !== 0) && (arr[i] % 2 == 1)) {
    oddNums ++;
  } else if (arr[i] === 0) {
    nulls ++;
  }
}

console.log('Чётных чисел: ' + evenNums);
console.log('Нечётных чисел: ' + oddNums);
console.log('Нулевых элементов: ' + nulls);
}
OddEvenNums ()