import bubbleSort from "./bubble-sort/bubbleSort";
import insertionSort from "./insertion-sort/insertionSort";
import selectionSort from "./selection-sort/selectionSort";

const array = [5, 2, 4, 8, 9, 12, 3, 56, 23, 40, 11];

console.log('-------Bubble Sort-------\n' + bubbleSort(array));
console.log('\n-----Insertion Sort-----\n' + insertionSort(array));
console.log('\n-----Selection Sort-----\n' + selectionSort(array));