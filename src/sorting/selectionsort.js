'use strict';

const selectionSort = (array) => {
  let temp, min;
  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};

module.exports = selectionSort;
