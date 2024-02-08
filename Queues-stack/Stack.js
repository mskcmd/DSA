//likedList
class Node{
    constructor(data){
      this.data=data;
      this.next=null
    }
  }
  
  class stackll{
    constructor(){
      this.top=null
    }
    push(data){
      const newNode=new Node(data)
      newNode.next=this.top
      this.top=newNode
    }
    
    pop(){
      if(this.top===null){
        console.log("underfollwo" )
        return null
      }
      const popData=this.top.data
      this.top=this.top.next
      return popData
    }
    disply(){
      let curr=this.top
      while(curr){
        console.log(curr.data)
        curr=curr.next
      }
    }
  }
  const stack = new stackll();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.disply()
  stack.pop()
  stack.disply()
  