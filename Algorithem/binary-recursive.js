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
        return search(arr,target,leftIndex,midileIndex-1)
    }else{
        return search(arr,targat,midileIndex+1,rightIndex)
    }

}
console.log(binaryRecasive([-5,2,4,6,10],10));