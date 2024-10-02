import Node from "./node.js";

const createBst = (start, end, array) => {
  if (start > end) return null;
  let middle = Math.floor((start + end) / 2);
  let root = new Node(array[middle]);
  root.left = createBst(start, middle - 1, array);
  root.right = createBst(middle + 1, end, array);

  return root;
};

export const buildTree = (array) => {
  let sortedArray = [...array];
  sortedArray = [...new Set(array.sort((a, b) => a - b))];

  let start = 0;
  let end = sortedArray.length - 1;

  const tree = createBst(start, end, sortedArray);
  return tree;
};

export const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
