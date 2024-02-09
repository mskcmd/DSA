// let arr=[1,2,3,4,5,6]
// let mid = Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     console.log(mid)
//     console.log(left)
//     console.log(right)

//     function bubbleSort(arr) {
//         var len = arr.length;
//         var swapped;
//         while (true) {
//             swapped = false;
//             for (var i = 0; i < len - 1; i++) {
//                 if (arr[i] > arr[i + 1]) {
//                     var temp = arr[i];
//                     arr[i] = arr[i + 1];
//                     arr[i + 1] = temp;
//                     swapped = true;
//                 }
//             }
//             if (!swapped) {
//                 break;
//             }
//         }
//         return arr;
//     }
//     var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
//     var sortedArray = bubbleSort(unsortedArray);
//     console.log("Sorted Array:", sortedArray);

function string(str,index=0){
    if(index===str.length){
        return ""
    }
    return string(str,index+1)+str[index]
}
console.log(string("dsfs"))

function joinstring(str,index=0){
    if(index===str.length-1){
        return str[index]
    }
    return str[index]+joinstring(str,index+1)
    
}
console.log(joinstring(["dfsfsd","fffd",'fsfdfd']))


function insorting(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
    return arr
}
console.log(insorting([5,4,3,2,1]))





function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let poivt=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<poivt){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),poivt,...quickSort(right)]
}
console.log(quickSort([5,4,3,2,1]))
