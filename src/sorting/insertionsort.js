'use strict';

// http://thrillfighter.tistory.com/211

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i], j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
};

module.exports = insertionSort;
