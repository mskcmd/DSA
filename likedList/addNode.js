class Node {
  constructor(data) {
    this.data = data;
    this.Node = null;
  }
}
class likedList {
  constructor() {
    this.head = null;
  }
  addnode(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      const curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const myList = new likedList();
myList.addnode(10);
myList.print();
