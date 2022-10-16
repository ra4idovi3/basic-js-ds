const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.data = null;
  }
  root() {
    return !this.data ? null : this.data;
  }

  add(data) {
    this.data = addNode(this.data, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.data, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data == data) {
        return true;
      }
      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }
  }

  find(data) {
    return searchNode(this.data, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data == data) {
        return node;
      }
      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }
  }

  remove(data) {
    this.data = removeNode(this.data, data);
    function removeNode(node, data) {
      node;
      data;
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    return getNode(this.data);
    function getNode(node) {
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node.data;
      } else {
        return getNode(node.left);
      }
    }
  }

  max() {
    return getNode(this.data);
    function getNode(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data;
      } else {
        return getNode(node.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
