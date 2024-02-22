function heapsort(arr){
    for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
      heapfay(arr,arr.length,i)
    }
    for(let i=arr.length-1;i>0;i--){
      [arr[0],arr[i]]=[arr[i],arr[0]]
      heapfay(arr,i,0 )
    }
      return arr;
  }
  
  function heapfay(arr,n,i){
    let large=i;
    let left=2*i+1;
    let right=2*i+2;
    
    if(left<n&&arr[left]>arr[large]){
      large=left
    }
    if(right<n&&arr[right]>arr[large]){
      large=right
    }
    if(large!==i){
      [arr[i],arr[large]]=[arr[large],arr[i]]
      heapfay(arr,n,large)
    }
  }
  console.log(heapsort([7,6,5,4,3,2,1]))