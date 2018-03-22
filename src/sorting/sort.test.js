const bubbleSort = require('./bubblesort');
const selectionSort = require('./selectionsort');
const insertionSort = require('./insertionsort');

const assert = require('chai').assert;

describe('Sorting Algorithm test', () => {
  const expected = [2, 9, 23, 44, 53];

  it('Bubble Sort', () => {
    const sorted = [53, 9, 2, 44, 23];
    bubbleSort(sorted);
    assert.isOk(isSameArray(sorted, expected));
  });

  it('Selection Sort', () => {
    const sorted = [53, 9, 2, 44, 23];
    selectionSort(sorted);
    assert.isOk(isSameArray(sorted, expected));
  });

  it('Insertion Sort', () => {
    const sorted = [53, 9, 2, 44, 23];
    insertionSort(sorted);
    assert.isOk(isSameArray(sorted, expected));
  });
});

const isSameArray = (source, target) => {
  return source.every((v, i) => {
    return v === target[i];
  });
};
