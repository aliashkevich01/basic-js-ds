const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
module.exports = class Queue {
  init(){
    this.values={};
    this.head=0;
    this.tail=0;
  }
  getUnderlyingList() {
    return this.items[this.head];
  }

  enqueue(value) {
    this.items[this.tail]=value;
    this.tail++;
  }

  dequeue() {
   let item=this.items[this.head];
   delete this.items[this.head];
   this.head++;
   return item;
  }

}
