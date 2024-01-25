class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class likedList{
    constructor(){
        this.head=null;
    }
    addNode(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head=newNode
        }else{
            let curr = this.head;
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode
        }
    }
    toArray(){
        let array=[]
        let curr=this.head
        while(curr){
            array.push(curr.data)
            curr=curr.next
        }
        return array

    }
    print(){
        let curr =this.head;
        while(curr){
            console.log(curr.data)
            curr=curr.next
        }
    }
}

const List =new likedList()
List.addNode(10)
List.addNode(11)
List.addNode(12)
console.log(List.toArray());


List.print()