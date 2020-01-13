function reverseString(str){
    if(!str){
        return ''
    }else{
        
    let temp
    for(let i = str.length; i >= 0; i--){
        temp = temp + str[i]
    }
    return temp
    }
}

console.log(reverseString('hai'))
console.log(reverseString(''))