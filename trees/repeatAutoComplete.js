const createNode = (data) => ({
    data,
    nodes: [],
    start: false,
    end: false
})

const insert = (node, letters) => {
    let lastElement;
    if (letters.length === 0) {
        return node;
    }

    const [head, ...tail] = letters;
    let selectedNode = node.nodes.find(letter => letter.data === head);

    if(!selectedNode) {
        selectedNode = createNode(head);
        node.nodes.push(selectedNode);
    }

    markStart(root)
    markEnd(root)
    return insert(selectedNode, tail)
}

function markStart(node) {
    if (node.data === undefined) {
        node.nodes.forEach(element => element.start = true)
    }
}

function markEnd(node) {
    node.nodes.forEach(element => {
        element.end = true;
    })
}

function inserLetter(letter, node, array) {
    let newLetter;
    let newNode;
    console.log('node here UP', node);
        node.nodes.forEach(element => {
            if (element.data === letter) {
                let letterToInsert = element.data
                array.push(letterToInsert)
                letter = element.nodes[0].data
                node = element.nodes[0];

            }
            if(element.nodes.length > 0) {
                console.log(
                    'LETTER', letter, '\n',
                    '=========','\n',
                    '=========','\n',
                    'LETTER.START', element.nodes, '\n',
                    '+++++++++','\n',
                    '+++++++++','\n',
                    'node.nodes', node.nodes);
            }

            // inserLetter(letter, node, array)
        })
        // console.log('node HERE', node);
    // return inserLetter(letter, node, array)
}


function showWord(letter, node) {
    let branches;
    let leaf;
    let word = []
    inserLetter(letter, node, word)
    console.log('word', word);
    return word
}

function print(node, level = 0) {
    if(node === null) {
        return;
    }

    console.log('-'.repeat(level), node && node.data);

    node.nodes.forEach(element => {
        print(element, level + 1)
    })
}

const root = createNode();
insert(root, 'tail');
insert(root, 's');
insert(root, 'trie');
insert(root, 'tree');
insert(root, 'true');
insert(root, 'test');

insert(root, 'art');
insert(root, 'b');
insert(root, 'd');
insert(root, 'army');
print(root)

// setStart(root)
showWord('t', root)
