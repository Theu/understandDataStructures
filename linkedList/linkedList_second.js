const node1 = {
    data: 5,
    next: null
}

const node2 = {
    data: 7,
    next: node1
}

// node one and node two are connected

// a LinkdeList is a class that encapsulate the nodes. It contains -->

// - a HEAD property. Is the pointer to the first node
// - a TAIL property. Is the pointer to the last node
// - a COUNT property

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    };

    get length() {
        return this.count;
    };

    createNode(data, next) {
        return {
            data,
            next: null
        };
    };

    addLast(data) {
        const node = this.createNode(data);

        if(this.count === 0) { // verify if the list is empty. if yes assign the node to the head
            this.head = node;
        } else { //assign node to the TAIL
            this.tail = node;
        }
        this.count++;
        return this;
    };

    addFirst(data) {
        const node = this.createNode(data);
        const temp = this.head;
        this.head = node;
        node.next = temp;
        this.count++;
        return this;
    };

    removeFromHead() {
        if (this.count > 0) {
            this.head = this.head.next;
            this.count--;
            return this;
        }

        return 'This list is empty';

    };

    removeAndRetournHead() {
        if (this.count > 0) {
            const valueRemoved = this.head;
            this.head = this.head.next;
            this.count--;

            return valueRemoved;
        }

        return 'This list is empty';
    };

    removeFromTail() {
        if(this.count > 0) {
            this.tail = null;
            this.count--;
        }
        return this;
    };

    removeAndRetournTail() {
        if( this.count > 0) {
            const valueRemoved = this.tail;
            this.tail = null;
            this.count--;

            return valueRemoved;
        }
        return this;
    };

    findValue(data) {
        let thisNode = this.head;
        while(thisNode) {
            if(thisNode.data === data) {
                return thisNode
            } else {
                return 'The searced value is not present in the list'
            }
            thisNode = thisNode.next
        }
        return thisNode
    };

    deleteValue(data) {
        let thisNode = this.head;
        while(thisNode) {
            if(thisNode.data === data) {
                thisNode.data = thisNode.next.data;
                // thisNode.next = null;
                this.count--;
            } else {
                return 'The searced value is not present in the list'
            }
            thisNode = thisNode.next
        }
        return this
    }
}

const myList = new LinkedList()
    .addFirst('gravy')
    .addFirst('mash')
    .addFirst('peas')
    .addLast('guinness')
    .addLast('rugby')
    .addFirst('pie')
    // .removeAndRetournHead()
    // .findValue('pief')
    // .deleteValue('pie')
    // .removeFromTail()
    // .removeFromHead()
console.log('myList', myList);
