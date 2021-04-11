const ListNode = require('../extensions/list-node');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const node = new ListNode(value);

    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }

    this.length++;
  }

  pop() {
    const current = this.top;
    this.top = this.top.next;
    this.length--;

    return current.value;
  }

  peek() {
    return this.top.value;
  }
}

module.exports = Stack;
