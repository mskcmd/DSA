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

  // insertMiddle
  insertMiddle(data, p) {
    const nweNode = new Node(data)
    if (p === 1) {
      nweNode.next = this.head;
      this.head = nweNode;
      return
    }
    let curr = this.head;
    let count = 1
    while (count < p - 1 && curr) {
      curr = curr.next;
      count++
    }
    if (curr) {
      nweNode.next = curr.next
      curr.next = nweNode
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

const myList = new LinkedList();
myList.addNode(10);
myList.addNode(11);
myList.addNode(12);
myList.addNode(13);
myList.insertMiddle(1, 2); // Fix: Correct order of arguments (data, position)
myList.print();
