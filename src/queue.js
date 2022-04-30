const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.top = this.end = null;
  }
  getUnderlyingList() {
    return this.top
  }

  enqueue(value) {
    const node = new ListNode(value)
    if (this.end == null) {
      this.top = this.end = node
    } else {
      this.end.next = node
      this.end = this.end.next
    }
  }

  dequeue() {
    if (this.top == null) return
    const value = this.top.value
    this.top = this.top.next
    return value
  }

}


module.exports = {
  Queue
};
