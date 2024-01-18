
// let n = 5;
// let k = 1;

// for (let i = 2; i <= n; i++) {
//   k *= i;
// }

// console.log(k);


// Time Complexity:
// -------------------
// # The time complexity is O(n), where n is the input to the factorial function.
// # This is because the function makes n recursive calls, each performing a constant amount of work.
// # Space Complexity:
// ----------------------
// # The space complexity is O(n) as well.
// # Each recursive call adds a new frame to the call stack, and in the worst case, there can be n recursive calls on the stack (when n is the input).
// # The space complexity is dominated by the maximum depth of the recursion.


function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const n = 5;
  const k = factorial(n);
  
  console.log(k);
  