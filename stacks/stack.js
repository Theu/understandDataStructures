function stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

const newStack = new stack()
newStack.push('David')
newStack.push('Raymond')
newStack.push('Brian')
newStack.push('Bruce')
console.log('length', newStack.length())
console.log('peek', newStack.peek())
console.log('stack', newStack)


function isPalindrome(word) {
    var s = new stack()
    for (var index = 0; index < word.length; index++) {
        s.push(word[index]);
    }
    var revertedWord = '';
    while(s.length() > 0) {
        revertedWord += s.pop()
    }
    return (word == revertedWord) ? true : false
}

console.log('is racecar palindrome?', isPalindrome('racecar'));

