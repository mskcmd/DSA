class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
      this.tail = newNode;
    }
  
    print() {
      let curr = this.head;
      while (curr !== null) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  }
  
  const myList = new LinkedList();
  myList.addNode(10);
  myList.addNode(20);
  myList.print();
  