class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SimpleLinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(data) {
      const newNode = new ListNode(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(`${current.data}`);
        current = current.next;
      }
      console.log("null");
    }
  }
  
  // Example usage
  const simpleList = new SimpleLinkedList();
  simpleList.addNode(10);
  simpleList.addNode(20);
  simpleList.addNode(30);
  simpleList.addNode(40);
  
  // Print the linked list
  simpleList.printList();
  // Output: 10 -> 20 -> 30 -> 40 -> null
  