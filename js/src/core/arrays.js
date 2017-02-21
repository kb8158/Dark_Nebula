removeWithoutCopy = (arr, item) => {
  for(var i = arr.length; i--;){
	   if (arr[i] === item) arr.splice(i, 1);
  }
  return arr;
};

append = (arr, item) => {
  arr.push(item);
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr
};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr
};

curtail = (arr) => {
  arr.shift();
  return arr
};

concat = (arr1, arr2) => {
  newArray = arr1.concat(arr2)
  return newArray
};

insert = (arr, item) => {

}

count = (arr, item) => {

};

duplicates = (arr) => {

};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
