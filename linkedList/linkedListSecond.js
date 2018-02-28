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

export default class LinkedList {
    constructor() {
        this.first = null;
        this._count = 0;
    };

    get length() {
        return this._count;
    };

    createNode(data, next) {
        return {
            data,
            next: null
        };
    };
    append(data) {
        const node = this.createNode(data);
        let currentNode = this.first;

        // list is empty
        if(!currentNode) {
            this.first = node;
            this._count++;

            return this;
        };

        while(currentNode.next) {
            currentNode = currentNode.next;
            // while current node exist make it equal to the next node. Repeat until next is not null
        };
        currentNode.next = node;

        this._count++;
        return this;
    };

    prepend(data) {
        const node = this.createNode(data);

        if(this._count === 0) {
            this.first = node;
            this._count++;
            return this
        }

        node.next = this.first;
        this.first = node;
        this._count++;
        return this;
    };

    shift() {
        if (this._count > 0) {
            this.first = this.first.next;
            this._count--;
            return this;
        }
        return 'This list is empty';
    };

    pop() {
        let currentNode = this.first;
        let previousNode;
        if(!currentNode) {
            return 'This list is empty'
        }

        while(currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = null
        this._count--;

        return this
    }
}

