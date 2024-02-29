function sumNumbers(n) {
    if (n === 1) {
        return 1; // Base case: when n is 1, return 1
    } else {
        return n + sumNumbers(n - 1); // Recursive case: add n to the sum of numbers from 1 to n-1
    }
}
const result = sumNumbers(100000);
console.log(result);
