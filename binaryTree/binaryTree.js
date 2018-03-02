function BST(value) {
    this.value = value,
    this.leftChild = null,
    this.rightChild = null
    return this;
}

BST.prototype.insert = function(value) {
    if(value <= this.value) {
        if(!this.leftChild)  this.leftChild = new BST(value)
        else this.leftChild.insert(value)
    }
    if(value > this.value) {
        if(!this.rightChild) this.rightChild = new BST(value)
        else this.rightChild.insert(value)
    }
}

const myBst = new BST(3);
myBst.insert(2)
myBst.insert(1)
myBst.insert(1)
myBst.insert(4)
myBst.insert(2)
console.log('myBst', myBst);
