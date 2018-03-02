import BST from './binaryTree';

test('it creates an empty root', () => {
    const bst = new BST(3);
    expect(bst.root).toBeNull()
});
