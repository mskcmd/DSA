class Node {
    constructor(data) {
      this.data = data;
      this.next = null; // Corrected from this.Node to this.next
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
  
    print() {
      let curr = this.head;
      while (curr) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  
    findSecondLargest() {
      if (!this.head || !this.head.next) {
        console.log("List doesn't have enough elements to find the second largest.");
        return;
      }
  
      let firstMax = 0;
      let secondMax =0;
  
      let curr = this.head;
  
      while (curr) {
        if (curr.data > firstMax) {
          secondMax = firstMax;
          firstMax = curr.data;
        } else if (curr.data > secondMax && curr.data !== firstMax) {
          secondMax = curr.data;
        }
  
        curr = curr.next;
      }
  
      if (secondMax !== 0) {
        console.log("Second Largest Number:", secondMax);
      } else {
        console.log("List contains duplicate elements. Cannot find second largest.");
      }
    }
  }
  
  const myList = new LinkedList();
  myList.addNode(8);
  myList.addNode(12);
  myList.addNode(9);
  myList.addNode(13);
  myList.print();
  
  myList.findSecondLargest();
  