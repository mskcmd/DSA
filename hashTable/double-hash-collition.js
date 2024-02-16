class hashTable{
    constructor(size){
      this.table=new Array(size)
      this.size=size
    }
    
    hash(key){
      let totel=0
      for(let i=0;i<key.length;i++){
        totel+=key.charCodeAt(i)
      }
      return totel%this.size
    }
    
    hash2(key){
      let prime=50
      return prime-(key.length%prime)
    }
    
    set(key,value){
      let index=this.hash(key)
      let index2=this.hash2(key)
      while(this.table[index]!==undefined){
        index=(index+index2)%this.size
      }
      this.table[index]=value      
    }
    
    print(){
      for(let i=0;i<this.table.length;i++){
        if(this.table[i]!==undefined){
          console.log(i,this.table[i])
        }
      }
    }
  }
  const table = new hashTable(50);
    table.set("name", "suhail");
    table.set("age", "24");
    table.set("class","10")
      table.set("name", "fdsa");
  
    table.print();