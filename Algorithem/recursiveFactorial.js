function recursiveFactorial(n){
    if(n===0){
        return 1
    }
    console.log(n);
    return n*recursiveFactorial(n-1)
}

let n=5

console.log(recursiveFactorial(n))