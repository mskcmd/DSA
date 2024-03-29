//recasive binary search 

function binaryRecasive(arr,targat){
    return search(arr,targat,0,arr.length-1)
}

function search(arr,targat,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }

let midileIndex = Math.floor((leftIndex+rightIndex)/2)
    if(targat===arr[midileIndex]){
        return midileIndex
    }
    if(targat<arr[midileIndex]){
        return search(arr,targat,leftIndex,midileIndex-1)
    }else{
        return search(arr,targat,midileIndex+1,rightIndex)
    }
}

console.log(binaryRecasive([1,2,3,4,5,6,7,8,9],5));