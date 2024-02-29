class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
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

    removeNode(value) {
        if (!this.head) {
            return;
        }

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        let prev = null;

        while (curr && curr.data !== value) {
            prev = curr;
            curr = curr.next;
        }

        if (curr === null) {
            // Value not found
            return;
        }

        prev.next = curr.next;
    }

    addAtPosition(data, position) {
        const newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let curr = this.head;
        let prev = null;
        let count = 0;

        while (curr && count < position) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        if (count < position) {
            // Position is greater than the length of the list
            console.log("Position is out of bounds");
            return;
        }

        prev.next = newNode;
        newNode.next = curr;
    }

    toArray() {
        let array = [];
        let curr = this.head;
        while (curr) {
            array.push(curr.data);
            curr = curr.next;
        }
        return array;
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const list = new LinkedList();
list.addNode(10);
list.addNode(11);
list.addNode(12);

console.log("Original Linked List:");
list.print();

list.removeNode(11);
console.log("\nLinked List after removing node with value 11:");
list.print();

list.addAtPosition(15, 1);
console.log("\nLinked List after adding node with value 15 at position 1:");
list.print();

console.log("\nLinked List as Array:", list.toArray());
