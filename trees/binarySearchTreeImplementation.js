function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;

    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;

    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n
    }
    else {
        // because this.root is not null this.root is always the FIRST defined as not null (23)
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if(node != null) {
        inOrder(node.left);
        console.log(node.show(), 'inOrder');
        inOrder(node.right);
    }
}

function preOrder(node) {
    if(node != null) {
        console.log(node.show(), 'preOrder');
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if(node != null) {

        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show(), 'postOrder');
    }
}

function print(node, level = 0) {
    if(node === null) {
        return;
    }
    console.log('-'.repeat(level), node && node.show());
    print(node.left, level + 1);
    print(node.right, level + 1);
}



var nums = new BST();
nums.insert(56);
// nums.insert(81);
nums.insert(22);
nums.insert(10);
nums.insert(30);
nums.insert(77);
nums.insert(81);
nums.insert(92);

console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("preorder traversal: ");
preOrder(nums.root);
console.log("postorder traversal: ");
postOrder(nums.root)
print(nums.root);

