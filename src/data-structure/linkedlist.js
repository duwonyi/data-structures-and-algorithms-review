'use strict'

function LinkedList() {
  this.head = null
  this.tail = null
  this.count = 0
}

LinkedList.prototype.insert = function(newNode) {
  if (this.head === null && this.tail === null) {
    this.head = newNode
    this.tail = newNode
  } else {
    newNode.next = this.head
    this.head = newNode
  }
  this.count++
}

LinkedList.prototype.remove = function(index) {
  let currentIndex = 0
  let targetNode = this.head
  let previousNode = null

  if (index === 0) {
    this.head = this.head.next
  } else {
    while (currentIndex !== index) {
      previousNode = targetNode
      targetNode = targetNode.next
      currentIndex++
    }
    previousNode.next = targetNode.next
    if (index === this._count + 1) {
      this.tail = previousNode
    }
  }

  this.count--
}

LinkedList.prototype.getNode = function(index) {
  let currentIndex = 0
  let targetNode = this.head

  while (currentIndex !== index) {
    targetNode = targetNode.next
    currentIndex++
  }
  return targetNode
}

LinkedList.prototype.reverse = function() {
  let target = this.head.next
  let prev = this.head
  let next = target.next

  this.tail = this.head
  prev.next = null
  target.next = prev

  while (next !== null) {
    prev = target
    target = next
    next = target.next

    target.next = prev
  }

  this.head = target
}

module.exports = LinkedList
