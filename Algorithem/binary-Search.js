function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midileIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[midileIndex]) {
      return midileIndex;
    }
    if (target < arr[midileIndex]) {
      rightIndex = midileIndex - 1;
    } else {
      leftIndex = midileIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1






