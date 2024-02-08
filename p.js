//quiquSort 
function quiquSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let poivt = arr[arr.length - 1]
    let left = [];
    let right = [];
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < poivt) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quiquSort(left), poivt, ...quiquSort(right)]
}
console.log("   QuiquSort")
let a = [7, 6, 54, 3, 2, 1]
console.log(quiquSort(a))

//mergeSort

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    const sleft = mergeSort(left)
    const sright = mergeSort(right)

    let res = []
    let i = 0;
    let j = 0;

    while (i < sleft.length && j < sright.length) {
        if (sleft[i] < sright[j]) {
            res.push(sleft[i])
            i++
        } else {
            res.push(sright[j])
            j++
        }
    }
    while (i < sleft.length) {
        res.push(sleft[i])
        i++
    }
    while (j < sright.length) {
        res.push(sright[j])
        j++
    }
    return res
}
let arr = [87, 6, 5, 4, 3, 2, 1]
console.log("    Merge_Sort")
console.log(mergeSort(arr))
//insrtion Soert
function insrtionSort(arr){
 for(let i=1;i<arr.length;i++){
    let key=arr[i]
    j=i-1
    while(j>=0&&arr[j]>key){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=key
 }
 return arr
}
let aa = [87, 6, 5, 4, 3, 2, 1]
console.log("     Insrtion-Sort")
console.log(insrtionSort(aa))

function bobleSort(arr){
    let swapped
    while(true){
        swapped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1];
                arr[i+1]=temp
                swapped=true;
            }
           
        }
        if(!swapped){
            break;
        }
    }
    return arr
    
}

console.log(bobleSort([7,6,5,4,3,2,1]))