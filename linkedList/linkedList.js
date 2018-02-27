class LinkedList {
    constructor(value) {
        this.head = null;
        // this.tail = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }

    removeFromHead() {
        if (this.length === 0) {
            return 'the list is empty'
        }

        this.head = this.head.next;
        this.length--;
        return this
    }

    findValue(value) {
        let thisNode = this.head

        while(thisNode) {
            if(thisNode.value === value) {
                return thisNode
            }

            thisNode = thisNode.next
        }
        if(thisNode === null) {
            return 'the value is missing'
        }
        return thisNode
    }


}

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third')
    // .removeFromHead()
    .findValue('third')


console.log(list);
