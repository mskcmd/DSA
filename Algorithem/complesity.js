// Function with O(n) time complexity
function findSumLinear(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Function with O(1) time complexity
  function findSumConstant(arr) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Example usage
  const array = [1, 2, 3, 4, 5];
  
  console.log(findSumLinear(array));   // O(n) complexity
  console.log(findSumConstant(array)); // O(1) complexity
  