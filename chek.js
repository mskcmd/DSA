let arr=[1,2,3,4,5,6]
let mid = Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    console.log(mid)
    console.log(left)
    console.log(right)

    function bubbleSort(arr) {
        var len = arr.length;
        var swapped;
        while (true) {
            swapped = false;
            for (var i = 0; i < len - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    var temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        return arr;
    }
    var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    var sortedArray = bubbleSort(unsortedArray);
    console.log("Sorted Array:", sortedArray);

