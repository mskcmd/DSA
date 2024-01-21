function string(str,inedx=0){
    if(str.length<1){
        return str
    }
    return string(str.slice(1))+str[0]
}
console.log(string("dshfgs"))