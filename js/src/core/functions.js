isPrime = (num) => {

};

arraySum = (array) => {

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
