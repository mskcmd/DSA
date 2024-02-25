class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.inserNode(this.root, newNode);
    }
  }
  inserNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.inserNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.inserNode(root.right, newNode);
      }
    }
  }
  LevelOder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;  
    } else {
      return this.max(root.right);
    }
  }
}

const bts = new Tree();
bts.insert(10);
bts.insert(11);
bts.insert(12);
bts.insert(13);
console.log(bts.min(bts.root));
console.log(bts.max(bts.root));
