// src/bubble-sort/BubbleSort.ts
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

// src/main.ts
console.log(bubbleSort([5, 2, 4, 8, 9, 12, 3, 56, 23, 40, 11]));
