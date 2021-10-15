const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  rootNode=null;
  root() {
    return this.rootNode;
  }

  addNew(r,current){
    if(current.data<r.data){
      (r.left === null) ? r.left = current : this.addNew(r.left, current);
    }
    else {
      (r.right === null) ? r.right = current : this.addNew(r.right, current);
    }
  }

  add(data) {
    let currentNode=new Node(data);
    if(!this.rootNode){
      this.rootNode=currentNode;
    }
    else{
      this.addNew(this.rootNode, currentNode);
    }
    return this;
  }

  has(data) {
    return (this.findNode(this.rootNode,data)!==null);
  }

  findNode(r, data){
    if(!r){
      return null;
    } 
    else if (data<r.data) {
      return this.findNode(r.left,data);
    }
    else if (data>r.data) {
      return this.findNode(r.right,data);
    }
    else return r;
  }

  find( data ) {
    return this.findNode(this.rootNode,data);
  }

  rm(root, data){
    if (root === null) return null;
    else if (data < root.data) root.left = this.rm(root.left, data);
    else if (data > root.data) root.right = this.rm(root.right, data);
    else {
        if (root.left === null && root.right === null) root = null;
        else if (root.left === null) root = root.right;
        else if (root.right === null) root = root.left;
        else {
          let newNode = this.findMin(root.right);
          root.data = newNode.data;
          root.right = this.rm(root.right, newNode.data);
        }
      }
    return root;
  }

  remove(data) {
    this.rootNode=this.rm(this.rootNode,data);
    return this;
  }
  findMin(root) { 
    if (root.left === null) return root;
    else return this.findMin(root.left);
  }

  findMax(root) { 
    if (root.right === null) return root;
    else return this.findMax(root.right);
  }

  min() {
    if (!this.rootNode) return null;
    return this.findMin(this.rootNode).data;
  }

  max() {
    if (!this.rootNode) return null;
    return this.findMax(this.rootNode).data;
  }
  
}