const sorting = require('./selectionsort');
const assert = require('chai').assert;

describe('Selection Sort', () => {
  it('sorting array', () => {
    let sorted = sorting([3, 2, 1]);
    const expected = [1, 2, 3];

    assert.isOk(sorted.every((v, i) => {
      return v === expected[i];
    }));
  });
});
