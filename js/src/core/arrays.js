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

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
}

count = (arr, item) => {
  total = 0;
  for(let i = 0; i < arr.length; ++i) {
    if(arr[i] == item)
    total++;
  }
  return total
};

duplicates = (arr) => {
  arr.sort();
  let  newArray = []
  for (var  i=0; i < arr.length; i++) {
    if (arr[i + 1] == arr[i]) {
      newArray.push(arr[i]);
    }
    if (newArray[newArray.length - 2] == arr[i]) {
      newArray.splice(newArray.length - 1, 1)
    }
  }
  return newArray;
};

square = (arr) => {
  for (let i=0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
  }
  return arr;
};

findAllOccurrences = (arr, item) => {
  let indexArray = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      indexArray.push(i);
    }
  }
  return indexArray;
};
