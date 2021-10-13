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
    if(this.queue==null){
      return this.queue=new NodeList(value);
    }
    let p=this.queue;
    while(p.next!=null){
      p=p.next;
    }
    return p.next=new NodeList(value);
  }

  dequeue() {
    if(this.queue==null) {
      return null; 
    }
    let result=this.queue.result;
    this.queue=this.queue.next;
    return result;
  }

}
