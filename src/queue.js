const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
    this.value;
    this.next;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    addElement(this, value);

    function addElement(pos, value) {
      if (!pos.value) {
        pos.value = value;
        pos.next = null;
        return pos;
      }
      if (!pos.next) {
        pos.next = new ListNode(value);
      } else {
        return addElement(pos.next, value);
      }
    }
  }

  dequeue() {
    let element;
    let node = removeElement(this);
    this.value = node.value;
    this.next = node.next;
    function removeElement(node) {
      if (!node.value) {
        return null;
      }
      if (!node.next) {
        return null;
      } else {
        element = node.value;
        node = node.next;
        return node;
      }
    }
    return element;
  }
}

module.exports = {
  Queue,
};
