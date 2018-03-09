const createNode = (data) => ({
    data,
    wordToSave: undefined,
    nodes: []
});

const insert = (node, letters, word) => {

    if(!!word && !!node.data) {
        node.wordToSave = word
    }

    if (letters.length === 0) {
        return node;
    }
    const [head, ...tail] = letters;
    let selectedNode = node.nodes.find(element => element.data === head);
    if (!selectedNode) {
        selectedNode = createNode(head); // every time my t then my r than so on
        node.nodes.push(selectedNode);
    }


    return insert(selectedNode, tail, word);
};

const selectLetter = (node, letter) => {
    if(letter === 't') {
        console.log('wordTosave', node);
    }
}

function print(node, level = 0) {
    if(node === null) {
        return;
    }
    console.log('-'.repeat(level), node && node.data, node.wordToSave);

    node.nodes.forEach(element => {
        print(element, level + 1);
    });
}

const insertWord = (node, word) => insert(node, word.split(''), word)
// -------

const root = createNode(); // here i create my empty root for T
insertWord(root, 'tree');
insertWord(root, 'trie');
insertWord(root, 'try');
insertWord(root, 'art');
insertWord(root, 'trust');
insertWord(root, 'army');
insertWord(root, 'milk');

// autocomplete(root, []); // all words
// autocomplete(root, ['t']); // all words starting with t
// autocomplete(root, ['t', 'r']); // all words starting with tr

print(root);
selectLetter(root, 't')

