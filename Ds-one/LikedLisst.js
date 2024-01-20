// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class linkesList {
//   constructor() {
//     this.head = null;
//   }

//   append(data) {
//     const newNode = new Node(data);
//     if (this.head === null) {
//       this.head = newNode;
//     } else {
//       let curr = this.head;
//       while (curr.next !== null) {
//         curr = curr.next;
//       }
//       curr.next = newNode;
//     }
//   }
//   print() {
//     let curr = this.head;
//     while (curr !== null) {
//       console.log(curr.data);
//       curr = curr.next;
//     }
//   }
// }

// const linkedList = new linkesList();
// linkedList.append(10);
// linkedList.append(20);
// linkedList.append(30);

// linkedList.print();

// console.log("======================Second Time ======================");

// class NodeOne {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class linkList {
//   constructor() {
//     this.head = null;
//   }

//   appendOne(data) {
//     const newNodeOne = new NodeOne(data); // Pass 'data' to the constructor
//     if (this.head === null) {
//       this.head = newNodeOne;
//     } else {
//       let curr = this.head;
//       while (curr.next !== null) {
//         curr = curr.next;
//       }
//       curr.next = newNodeOne;
//     }
//   }

//   print() {
//     let curr = this.head;
//     while (curr !== null) {
//       console.log(curr.data);
//       curr = curr.next;
//     }
//   }
// }

// const linkListone = new linkList();
// linkListone.appendOne(12);
// linkListone.appendOne(13);
// linkListone.appendOne(14);
// linkListone.appendOne(15);
// linkListone.appendOne(16);
// linkListone.appendOne(17);
// linkListone.appendOne(18);

// linkListone.print();

class Node{
  constructor(data){
   this.data=data;
   this.next=null
  }
}

class likedList{
  constructor(data){
    this.head=null
  }
  addnode(data){
const newNode= new Node(data)
if(!this.head){
  this.head=newNode
  return
}
let curr=this.head
while(curr.next){
  curr=curr.next;
}
curr.next=newNode
  }

  insertbigning(data){
const newNode = new Node(data)
newNode.next= this.head;
this.head=newNode

  }

  print(){
    let curr=this.head;
    while(curr){
      console.log(curr.data)
      curr=curr.next
    }
  }
}

const myList = new likedList();
myList.addnode(10)
myList.addnode(11)
myList.addnode(12)
myList.addnode(13)
myList.insertbigning(9)
myList.print()