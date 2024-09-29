/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
  if(!Array.isArray(data)){
    return false;
  }
  let dict = new Map();
  for (let i =0; i < data.length; i++){
    if (!dict.has(data[i])){
      dict.set(data[i], 0);
    }
    dict.set(data[i], dict.get(data[i]) + 1);

  }
  return data.filter(d => dict.get(d) > 1);
}

function nonUniqueElementsWithObject(data) {
  if (!Array.isArray(data)) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    if (!obj.hasOwnProperty(data[i])) {
      obj[data[i]] = 0;
    }
    obj[data[i]]++;
  }
  return data.filter(d => obj[d] > 1);
}

function stopwatchDecorator(func){
  return function() {
    let start = performance.now();
    let result = func.apply(this, arguments);
    let end = performance.now();
    console.log(`Время выполнения: ${end - start} мс`);
    return result;
  };
}
console.log(stopwatchDecorator(nonUniqueElements)([1, 2, 3, 1, 2]));
console.log(stopwatchDecorator(nonUniqueElementsWithObject)([1, 2, 3, 1, 2]));