class Stack {
    constructor() {
        this.datastore = [],
        this.top = 0
    }

    push(element) {
        this.datastore.push(element);
        this.top++
    };

    pop() {
        this.top--
        return this.datastore.pop();

    };

    peak() {
        return this.datastore[this.datastore.length-1];
    };

    clear() {
        this.top = 0;
    };

    length() {
        return this.top;
    };
}

const pezStack = new Stack()

const revertedPezStack = new Stack()
// const yellowStack = new Stack()
// const redStack = new Stack()
pezStack.push('yellow')
pezStack.push('red')
pezStack.push('white')
pezStack.push('yellow')
pezStack.push('white')
pezStack.push('red')
pezStack.push('red')
pezStack.push('white')


function extractCandies(stack) {
    const topCandy = stack.peak();

    while(pezStack.length() > 0 ) {
        if(topCandy === 'white') {
            stack.pop()
            revertedPezStack.push(topCandy);
            extractCandies(stack);
        } else if(topCandy === 'red') {
            stack.pop()
            revertedPezStack.push(topCandy);
            extractCandies(stack);
        } else if(topCandy === 'yellow') {
            stack.pop()
            extractCandies(stack);
        }
    }
    return revertedPezStack
}

const revertedPez = extractCandies(pezStack)
function revertStack(stack) {
    let revertedStack = new Stack();
    while(stack.length() > 0) {
        revertedStack.push(stack.pop())
    }
    return revertedStack
}

const myCandies = revertStack(revertedPez)
