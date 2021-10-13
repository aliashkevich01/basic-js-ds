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
    this.queue=null;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let num=new ListNode(value);
    if(!this.queue){
      this.queue=num;
      return;
    }
    let check= (p)=>{
      if(!p.next){
        p.next=node;
        return;
      }
      check(p.next);
    }
    check(this.queue);
  }

  dequeue() {
    if(!this.queue) {
      return null; 
    }
    let result=this.queue.result;
    this.queue=this.queue.next;
    return result;
  }

}
