'use strict'

const Stack = require('./stack')

function Node(item, left, right) {
  this.item = item
  this.left = left
  this.right = right
}

function SimpleBineryTree() {
  this.root = null
  this.stack = new Stack()
}

SimpleBineryTree.prototype.treverse = function(fnVisit) {
  this.stack.push(this.root)

  while (!this.stack.isEmpty()) {
    let targetNode = this.stack.pop()
    fnVisit(targetNode.item)

    if (targetNode.right !== null) {
      this.stack.push(targetNode.right)
    }

    if (targetNode.left !== null) {
      this.stack.push(targetNode.left)
    }
  }
}

SimpleBineryTree.prototype.treverseInOrderRecursive = function(
  targetNode,
  fnVisit,
) {
  if (targetNode !== null) {
    this.treverseInOrderRecursive(targetNode.left, fnVisit)
    fnVisit(targetNode.item)
    this.treverseInOrderRecursive(targetNode.right, fnVisit)
  }
}

SimpleBineryTree.prototype.treverseInOrderWithStack = function(fnVisit) {
  let targetNode = this.root
  let isFinish = false

  do {
    while (targetNode !== null) {
      this.stack.push(targetNode)
      targetNode = targetNode.left
    }

    if (!this.stack.isEmpty()) {
      targetNode = this.stack.pop()
      fnVisit(targetNode.item)
      targetNode = targetNode.right
    } else {
      isFinish = true
    }
  } while (!isFinish)
}

SimpleBineryTree.prototype.treversePostOrderWithStack = function(fnVisit) {
  let target = this.root
  let visited = null
  let pushed = null
  let isFinish = false

  do {
    while (target !== null && target !== visited) {
      if (target !== pushed) {
        this.stack.push(target)
      }
      if (target.right !== null) {
        this.stack.push(target.right)
      }
      if (target.left !== null) {
        this.stack.push(target.left)
      }

      pushed = target.left
      target = target.left
    }

    if (!this.stack.isEmpty()) {
      target = this.stack.pop()

      if (
        target.left !== null &&
        target.right === null &&
        target.left !== visited
      ) {
        this.stack.push(target)
        target = target.left
      }

      if (
        target.right === null ||
        target.right === visited
      ) {
        fnVisit(target.item)
        visited = target
      }
    } else {
      isFinish = true
    }
  } while (!isFinish)
}

SimpleBineryTree.prototype.makeTree = function() {
  const dNode = new Node('D', null, null)
  const eNode = new Node('E', null, null)
  const fNode = new Node('F', null, null)
  const gNode = new Node('G', null, null)
  const bNode = new Node('B', dNode, eNode)
  const cNode = new Node('C', fNode, gNode)
  const aNode = new Node('A', bNode, cNode)

  this.root = aNode
}

module.exports = SimpleBineryTree
