class Qus{
    constructor(){
      this.stack1=[]
      this.stack2=[]
    }
    enqueue(item){
      this.stack1.push(item)
    }
    dequeue(){
      if(this.stack2.length===0){
        while(this.stack1.length!==0){
          this.stack2.push(this.stack1.pop())
        }
      }
      return this.stack2.pop()
    }
     print() {
      const combinedStacks = this.stack2.concat(this.stack1.reverse());
      console.log(combinedStacks);
    }
  }
  const myList=new Qus()
  myList.enqueue(10)
  myList.enqueue(20)
  myList.enqueue(30)
  myList.enqueue(40)
  myList.print()
  myList.dequeue()
  myList.print()
  