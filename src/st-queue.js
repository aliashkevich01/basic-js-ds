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
module.exports = class Queue {
  constructor(){
    this.queue=null;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    function add(li){
      if(!li.next){
        li.next=new ListNode(value);
      }
      else{
        add(li.next);
      }
    }
      if(!this.queue){
        this.queue=new ListNode(value);
      }
      else {
        add(this.queue);
      }
    
  }
  dequeue(){
    if(!this.queue){
      return this.queue;
    }
    let result=this.queue.value;
    this.queue=this.queue.next;
    return result;
  }
  }
  

  
