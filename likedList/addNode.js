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
  last(){
    let curr=this.head;
    let =sl
    while(curr){
      if(curr.next===null)
       sl=curr.data;
    }
    return sl
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
myList.addnode(11);
myList.addnode(12);
myList.addnode(13);
console.log(myList.last())
myList.print();
