  class Node {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }
    class bsTree {
      constructor() {
        this.root = null;
      }
      isEmpty() {
        return this.root === null;
      }
      insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
          this.root = newNode;
        } else {
          this.inserNode(this.root, newNode);
        }
      }
      inserNode(root, newNode) {
        if (newNode.value < root.value) {
          if (root.left === null) {
            root.left = newNode;
          } else {
            this.inserNode(root.left, newNode);
          }
        } else {
          if (root.right === null) {
            root.right = newNode;
          } else {
            this.inserNode(root.right, newNode);
          }
        }
      }
      search(root, value) {
        if (!root) {
          return false;
        } else {
          if (root.value === value) {
            return true;
          } else if (value < root.value) {
            return this.search(root.left, value);
          } else {
            return this.search(root.right, value);
          }
        }
      }
      levelOder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
          let curr=queue.shift()
          console.log(curr.value)
          if(curr.left){
            queue.push(curr.left)
          }
          if(curr.right){
            queue.push(curr.right)
          }
        }
      }
      
    }
    const bst = new bsTree();
    // console.log("is empty ? ", bst.isEmpty());
    
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    console.log("levelOder");
    bst.levelOder()


    // console.log(bst.search(bst.root, 10));
    // console.log(bst.search(bst.root, 5));
    // console.log(bst.search(bst.root, 15));
    // console.log(bst.search(bst.root, 3));
    // console.log(bst.search(bst.root, 7));
    // console.log(bst.search(bst.root, 54));
    