function quickSort (arr) {
    console.log("pass", arr)
if (arr. length < 2) {
return arr
}
let pivot = arr [arr.length-1]
let left = []
let right = []  
for (let i = 0; i < arr.length - 1; i++) {
if (arr[i] < pivot) {
left.push(arr[i])
} else {
right.push(arr[i])
}
}
return [...quickSort (left), pivot, ...quickSort (right)]
}
const arr = [8,5,6,9,7,1,3,2]
console.log(quickSort (arr)) // [-6, -2, 4, 8, 20]