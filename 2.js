let z = 0;
function isPrime (a) {
  if ((a === 2) || (a === 1)) {
    console.log('Простое число');
  } else if ((a > 1000) || (typeof a !== 'number')) {
    console.log('Данные неверны');
  } else if (a === 0) {
    console.log('Ноль не является натуральным числом и, соответственно, не является ни простым, ни составным.')
  } else {
    for (let i = 2; i < a; i++) {
      if (a % i == 0) {
        z++;
      } else {
        z = z;
      }
    }
    if (z !== 0) {
      console.log('Составное число')
    } else {
      console.log('Простое число');
    }
  }
}
isPrime(5)