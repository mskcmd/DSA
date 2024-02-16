class StackUsingQueue {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(item) {
      this.queue1.push(item);
    }
  
    pop() {
      if (this.queue1.length === 0) {
        return "Stack is empty";
      }
  
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      const poppedItem = this.queue1.shift();
      [this.queue1, this.queue2] = [this.queue2, this.queue1]; // Swap queues
  
      return poppedItem;
    }
  
  }
  
  // Example usage:
  const stack = new StackUsingQueue();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop());
  console.log(stack.pop()); 
  
  