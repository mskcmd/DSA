// function quickSort (arr) {
//     console.log("pass", arr)
// if (arr. length < 2) {
// return arr
// }
// let pivot = arr [arr.length-1]
// let left = []
// let right = []  
// for (let i = 0; i < arr.length - 1; i++) {
// if (arr[i] < pivot) {
// left.push(arr[i])
// } else {
// right.push(arr[i])
// }
// }
// return [...quickSort (left), pivot, ...quickSort (right)]
// }
// const arr = [8,5,6,9,7,1,3,2]
// console.log(quickSort (arr)) // [-6, -2, 4, 8, 20]




function Qsort(arr){
    if(arr.length<2){
        return arr
    }
    let p=arr[arr.length-1]
    let l=[]
    let r=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<p){
            l.push(arr[i])
        }else{
            r.push(arr[i])
        }
    }
    return [...Qsort(l),p,...Qsort(r)]
}
const arr1 = [8,5,6,9,7,1,3,2]
console.log(Qsort(arr1)) // [-6, -2, 4, 8, 20]