function doubleValue(array,b){
   if(!b){
       return 'invalid input'
   }else{
    for(let i = 0; i < array.length; i++){
        if(array[i] == b){
             b = b * b
        }
    }
    return b
   }
}

console.log(doubleValue([1, 2, 3, 4, 9], 3))