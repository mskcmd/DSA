class Node {
    constructor(data) {
      this.data = data;
      this.next = null
    }
  }
  class likedList {
    constructor() {
      this.head = null;
    }

    //addNode IN Bignning
    addNodeFIrst(data){
        const newNode = new Node(data)
        newNode.next=this.head
        this.head=newNode

    }

    //Add Node
    addnode(data) {
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
  }
  const array=[1,2,3,4,5]
  const myList = new likedList();
  myList.addnode(10);
  myList.addnode(11);
  myList.addnode(12);
  myList.addnode(13);
  myList.addnode(14);
  myList.addNodeFIrst(9)

  array.forEach((elamant)=>{
    myList.addnode(elamant)
  })
  myList.print();