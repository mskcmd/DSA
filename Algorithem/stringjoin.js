function reverseString(str, index = 0) {
  if (index === str.length) {
    return "";
  }

  return reverseString(str, index + 1) + str[index];
}

// Pass a string instead of an array
console.log('qazwsxedc')
console.log(reverseString('qazwsxedc'));

function joinstring(str,index=0) {
    if(index===str.length-1){
      return str[index]
    }else{
        return str[index]+joinstring(str,index+1)
  
    }
   
  }
  console.log(["dsfsdfdsf","fdgfdf","gfdgfdgfd"])
  let str=["dsfsdfdsf","fdgfdf","gfdgfdgfd"]
  console.log([joinstring(str)]);