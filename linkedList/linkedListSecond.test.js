import LinkedList from './linkedListSecond';

test('expect empty list to be created', () => {
    const listTest = new LinkedList();
    expect(listTest).toHaveLength(0);
});
test('expect created list to have HEAD with value null', () => {
    const listTest = new LinkedList();
    expect(listTest.first).toBe(null);
});

test('expect to increase length to one using prepend()', () => {
    const listTest = new LinkedList();
    expect(listTest.prepend('pie')).toHaveLength(1);
});
test('expect list.head.data to be equal to inserted value', () => {
    const listTest = new LinkedList();
    listTest.prepend('pie');
    expect(listTest.first.data).toBe('pie');
});
test('expect list.head.next to be equal to null', () => {
    const listTest = new LinkedList();
    listTest.prepend('pie');
    expect(listTest.first.next).toBeNull();
});

test('expect APPEND to increase length of 1 when used', () => {
    const listTest = new LinkedList();
    listTest.append('pie');
    expect(listTest).toHaveLength(1);
});

test('expect APPEND to add node to first if list is empty', () => {
    const listTest = new LinkedList();
    listTest.append('pie');
    expect(listTest.first.data).toBe('pie');
});
// test('expect APPEND to add node to end if list is empty', () => {
//     const listTest = new LinkedList();
//     listTest.append('pie');
//     listTest.append('mash');
//     expect(listTest.first.data).toBe('pie');
//     expect(listTest.first.next.data).toBe('mash')
// });
test('expect APPEND to add node to end if list is empty', () => {
    const listTest = new LinkedList();
    listTest.append('pie');
    listTest.append('mash');
    expect(listTest.first.data).toBe('pie');
    expect(listTest.first.next.data).toBe('mash');
});

test('it return an alert message if try to shift on empty list', () => {
    const listTest = new LinkedList();
    listTest.prepend('pie');
    listTest.shift()
    expect(listTest.shift()).toBe('This list is empty');
});
test('it remove the first node of the list', () => {
    const listTest = new LinkedList();
    listTest.prepend('Guinness');
    listTest.prepend('mash');
    listTest.prepend('pie');
    listTest.prepend('mash');
    listTest.shift();
    expect(listTest.first.data).toBe('pie');
});

test('it return an alert message if try to pop on empty list', () => {
    const listTest = new LinkedList();
    listTest.pop();
    expect(listTest.pop()).toBe('This list is empty')
});
test('it remove the last element of the list and decrement length of 1', () => {
    const listTest = new LinkedList();
    listTest.prepend('mash');
    listTest.prepend('Guinness');
    listTest.shift();
    expect(listTest.first.next).toBeNull();
});



