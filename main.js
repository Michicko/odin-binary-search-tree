import Tree from "./tree.js";
import { prettyPrint } from "./utils.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

prettyPrint(tree.root)