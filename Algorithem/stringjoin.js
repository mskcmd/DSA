function joinstring(str,index=0) {
    if(index===str.length-1){
      return str[index]
    }else{
        return str[index]+joinstring(str,index+1)
  
    }
   
  }
  let str=["dsfsdfdsf","fdgfdf","gfdgfdgfd"]
  console.log(joinstring(str));