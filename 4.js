function nums(firstNum, lastNum) {
  let i = firstNum;
  let timerId = setInterval(function() {
    console.log(i);
    if (i == lastNum) {
      clearInterval(timerId);
    }
    i++;
  }, 1000);
}
nums(5, 15);