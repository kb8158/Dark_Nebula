isPrime = (num) => {
  for(let i = 2, i < num; i++) {
    if  (num % i === 0) {
      return false
    } else {
      return true
    }
  }

};

arraySum = (array) => {
  count = 0;
  for (var number of array){
    count += number;
  }
  return count;
};

fizzBuzz = (num) => {
  if (num === null) {
    return null;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return "fizzBuzz";
  }
  else if (num % 3 === 0) {
    return "fizz";
  }
  else if (num % 5 === 0) {
    return "buzz";
  }
  return num;
};
