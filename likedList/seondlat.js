class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newNode;
      }
    }
  
    getLast() {
      let curr = this.head;
      let lastData = null;
      while (curr) {
        if (curr.next === null) {
          lastData = curr.data;
        }
        curr = curr.next;
      }
      return lastData;
    }
  
    getSecondLast() {
      let curr = this.head;
      let secondLastData = null;
  
      if (!curr || !curr.next) {
        return null; // Less than two elements in the list
      }
  
      while (curr.next.next) {
        console.log(curr.next.next)
        curr = curr.next;
      }
      secondLastData = curr.data;
  
      return secondLastData;
    }
  
    print() {
      let curr = this.head;
      while (curr) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  }
  
  const myList = new LinkedList();
  myList.addNode(1230);
  myList.addNode(1331);
  myList.addNode(132);
  myList.addNode(13);
  
  console.log("Last Element:", myList.getLast());
  console.log("Second Last Element:", myList.getSecondLast());
  myList.print();
  