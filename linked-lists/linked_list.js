class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList(){
    const array = [];
    let currentNode = this.head;

    while (currentNode != null) {
      array.push(currentNode);
      currentNode = currentNode.next;
    }
    return array;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value == value) {
        return true
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  isEmpty() {
    return this.head ==null;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  deleteHead(){
    if (this.isEmpty()) {
      return this
    }

    let firstElement = this.head;
    this.head = firstElement.next;
    return this
  }

  deleteTail() {
    if (this.isEmpty()) {
      return this
    }
    const leader = this.traverseToIndex( this.length - 2);
    this.tail = leader;
    leader.next = null;
    return this;
  }

  getLength(){
    if (this.isEmpty()) {
      return 0;
    }

    let currentNode = this.head;
    let length = 1;
    while (currentNode.next != null) {
      currentNode = currentNode.next
      length++;
    }
    console.log(length)

    return length;

  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(23);
myLinkedList.prepend(1);
myLinkedList.insert(2,99)
myLinkedList.insert(20,88)
console.log(myLinkedList.getLength())
console.log(myLinkedList.printList())