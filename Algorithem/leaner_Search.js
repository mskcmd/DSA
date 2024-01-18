function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return arr[i];
        }
    }
    return -1
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 90;
let result = linearSearch(num, target);
console.log(result); // Output: 3

// # Time Complexity (linear search): O(n)
// # Space Complexity (linear search): O(1)