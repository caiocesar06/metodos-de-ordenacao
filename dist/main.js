"use strict";

// src/bubble-sort/bubbleSort.ts
function bubbleSort(array2) {
  const arr = [...array2];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// src/insertion-sort/insertionSort.ts
function insertionSort(array2) {
  const arr = [...array2];
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
}

// src/selection-sort/selectionSort.ts
function selectionSort(array2) {
  const arr = [...array2];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min])
        min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

// src/main.ts
var array = [5, 2, 4, 8, 9, 12, 3, 56, 23, 40, 11];
console.log("-------Bubble Sort-------\n" + bubbleSort(array));
console.log("\n-----Insertion Sort-----\n" + insertionSort(array));
console.log("\n-----Selection Sort-----\n" + selectionSort(array));
