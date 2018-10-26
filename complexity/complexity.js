/*
Time Complexity (or big O) of an algorithm refers to how long it will take to run as inputs increase,
referring to worst case scenario. Space Complexity refers to how much memory will be used as inputs increase
*/

// Constant Time, Constant Space
// =============================

function getFirstElement(arr) {
  return arr[0]
}

// Linear Time, Constant Space.
// ============================

function summArr(numberArray) {
  let sum = 0
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i]
  }
  return sum;
}

// Linear Time, Linear Space
// =========================

function add2ToAll(numberArray) {
  const resultArr = [];
  for (let i = 0; i < numberArray.length; i++) {
    resultArr.push(numberArray[i] + 2)
  }
  return resultArr;
}

// YOU DO: Convert above to Linear Time, Constant Space

// Quadratic Time, Constant Space
// ==============================

function stringContainsMultiples(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return true;
    }
  }
  return false;
}

// Logarithmic Time
// ================

function node(value) {
  return {
    value,
    left: null,
    right: null,
  }
}

class BinarySearchTree {
  constructor(rootVal) {
    this.root = {
      value: rootVal,
      left: null,
      right: null,
    }
  }

  insert(nodeVal) {
    let current = this.root;
    while (current) {
      if (current.value < nodeVal) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node(nodeVal)
          return
        }
      } else if (current.value > nodeVal) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node(nodeVal)
          return
        }
      } else {
        console.log('Value already exists')
        return null
      }
    }
  }

  contains(val) {
    let current = this.root
    while (current) {
      if (current.value === val) return true;
      if (current.value < val) {
        if (current.right) {
          current = current.right
        } else {
          return false;
        }
      } else if (current.value > val) {
        if (current.left) {
          current = current.left
        } else {
          return false;
        }
      }
    }
  }
}

const tree = new BinarySearchTree(11)

// Challenge: Look up Bubble Sort, Merge Sort and Quick sort and try to implement those.
