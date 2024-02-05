function bubbleSort(arr) {
    var len = arr.length;
    var swapped;
    while (true) {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

// function quickSort(arr) {
//     if (arr.length < 2) {
//       return arr;
//     }
    
//     let pivotIndex = Math.floor(arr.length / 2);
//     let pivot = arr[pivotIndex];
//     let left = [];
//     let right = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (i === pivotIndex) {
//         continue;
//       }
      
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
  
//   let arr = [5, 4, 8, 3, 4, 8, 9, 6];
//   console.log(quickSort(arr));
  