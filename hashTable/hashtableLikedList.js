class Node{
    constructor(key,value){
      this.key=key;
      this.value=value;
      this.next=null;
    }
  }
  
  class hashTable{
    constructor(size){
      this.table=new Array(size)
      this.size=size;
    }
    hash(key){
      let totel=0
      for(let i=0;i<key.length;i++){
        totel+=key.charCodeAt(i)
      }
      return totel%this.size
    }
    set(key,value){
      const index=this.hash(key)
      // this.table[index]=value
      if(!this.table[index]){
        this.table[index]=new Node(key,value)
      }else{
        let curr=this.table[index]
        while(curr.next){
          curr=cuur.next
        }
        curr.next=new Node(key,value)
      }
    }
    display(){
      for(let i=0;i<this.table.length;i++){
       let curr=this.table[i]
       while(curr){
         console.log(i,curr.key,curr.value)
         curr=curr.next
       }
      }
    }
  }
   const table = new hashTable(50);
    table.set("name", "suhail");
    table.set("age", "24");
    table.set("class","10")
    table.set("naem", "sacd")
    table.display();