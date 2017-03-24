'use strict';

const selectionSort = (array) => {
  let temp, indexMin;
  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }
};

module.exports = selectionSort;
