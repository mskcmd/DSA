function insrtionSort(arr){
    for(let i=1;i<arr.length;i++){
       let key=arr[i]
       j=i-1;
       while(j>=0&&arr[j]>key){
        arr[j+1]=arr[j]
        j--
       }
       arr[j+1]=key
    }
return arr
}
console.log(insrtionSort([5,4,3,2,1]))

