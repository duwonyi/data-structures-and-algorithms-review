const sorting = require('./insertionsort');
const assert = require('chai').assert;

describe('Insertion Sort', () => {
  it('sorting array', () => {
    let sorted = [3, 7, 2, 5, 1, 4];
    sorting(sorted);
    const expected = [1, 2, 3, 4, 5, 7];

    assert.isOk(sorted.every((v, i) => {
      return v === expected[i];
    }));
  });
});
