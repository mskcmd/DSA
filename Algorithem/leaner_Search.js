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

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];  
    let max = -Infinity;
    let minIndex = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j]) {
                if (prices[j] < min) {
                    min = prices[j];
                    minIndex = j;
                }
            }
        }
    }


    for (let k = minIndex + 1; k < prices.length; k++) {
        max = Math.max(max, prices[k]);
    }

    if (min === Infinity && minIndex === -1) {
        return 0
    } else {
        return max - min
    }
};
