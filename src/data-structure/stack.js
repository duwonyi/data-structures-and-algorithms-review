'use strict';

function Stack() {
  this.stack = [];
}

Stack.prototype.pop = function() {
  return this.stack.pop();
};

Stack.prototype.push = function(data) {
  return this.stack.push(data);
};

Stack.prototype.isEmpty = function() {
  if (this.stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Stack;
