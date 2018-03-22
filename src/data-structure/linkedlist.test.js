const Node = require('./node');
const LinkedList = require('./linkedlist');
const assert = require('chai').assert;

describe('Linked List', () => {
  it('LinkedList init', () => {
    const list = new LinkedList();
    list.insert(new Node(1))
    assert.equal(1, list.count);
    assert.equal(1, list.getNode(0).item);
    list.insert(new Node(2))
    assert.equal(2, list.count);
    assert.equal(2, list.getNode(0).item);
    assert.equal(1, list.getNode(1).item);
    list.insert(new Node(3))
    assert.equal(3, list.count);
    assert.equal(3, list.getNode(0).item);
    assert.equal(2, list.getNode(1).item);
    assert.equal(1, list.getNode(2).item);
    list.remove(1)
    assert.equal(2, list.count);
    assert.equal(3, list.getNode(0).item);
    assert.equal(1, list.getNode(1).item);
    list.insert(new Node(4))
    assert.equal(3, list.count);
    list.reverse();
    assert.equal(1, list.getNode(0).item);
    assert.equal(3, list.getNode(1).item);
    assert.equal(4, list.getNode(2).item);
    list.reverse();
    assert.equal(4, list.getNode(0).item);
    assert.equal(3, list.getNode(1).item);
    assert.equal(1, list.getNode(2).item);
    list.remove(0)
    assert.equal(2, list.count);
    list.reverse();
    assert.equal(1, list.getNode(0).item);
    assert.equal(3, list.getNode(1).item);
  });
});
