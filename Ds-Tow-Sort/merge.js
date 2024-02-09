
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Already sorted
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves without using concat
  const mid = [];   
  let j = 0;
   let i=0
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      mid.push(sortedLeft[i]);
      i++;
    } else {
      mid.push(sortedRight[j]);
      j++;
    }
  }

  // Add remaining elements from left and right (if any)
  while (i < sortedLeft.length) {
    mid.push(sortedLeft[i]);
    i++;
  }

  while (j < sortedRight.length) {
    mid.push(sortedRight[j]);
    j++;
  }

  return mid;
}

// Ex;ample usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = mergeSort(unsortedArray);
console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray)


  //no using in buld function 
//   function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr; // Already sorted
//     }
  
//     const middle = Math.floor(arr.length / 2);
  
//     const leftHalf = new Array(middle);
//     for (let i = 0; i < middle; i++) {
//       leftHalf[i] = arr[i];
//     }
  
//     const rightHalf = new Array(arr.length - middle);
//     for (let i = 0; i < rightHalf.length; i++) {
//       rightHalf[i] = arr[middle + i];
//     }
  
//     const sortedLeft = mergeSort(leftHalf);
//     const sortedRight = mergeSort(rightHalf);
  
//     // Merge the sorted halves without using push or concat
//     const mergedArray = new Array(arr.length);
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let mergedIndex = 0;
  
//     while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
//       if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
//         mergedArray[mergedIndex] = sortedLeft[leftIndex];
//         leftIndex++;
//       } else {
//         mergedArray[mergedIndex] = sortedRight[rightIndex];
//         rightIndex++;
//       }
//       mergedIndex++;
//     }
  
//     // Add remaining elements from left and right (if any)
//     while (leftIndex < sortedLeft.length) {
//       mergedArray[mergedIndex] = sortedLeft[leftIndex];
//       leftIndex++;
//       mergedIndex++;
//     }
  
//     while (rightIndex < sortedRight.length) {
//       mergedArray[mergedIndex] = sortedRight[rightIndex];
//       rightIndex++;
//       mergedIndex++;
//     }
  
//     return mergedArray;
//   }
  
//   // Example usage:
//   const unsortedArray = [5, 2, 9, 1, 5, 6];
//   const sortedArray = mergeSort(unsortedArray);
//   console.log("Unsorted Array:", unsortedArray);
//   console.log("Sorted Array:", sortedArray);
  