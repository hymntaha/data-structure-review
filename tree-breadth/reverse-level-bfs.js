const Deque = require('collections/deque');

class TreeNode{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  const result = new Deque();
  if (root === null) {
    return result;
  }
  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = [];
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      console.log(currentNode)
      // add the node to the current level
      currentLevel.push(currentNode.value);
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.unshift(currentLevel);
  }
  return result;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root).toArray()}`);
