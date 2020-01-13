function isString(a){
    if (typeof(a) == 'string'){
        return true
    }else{
        return false
    }
}

console.log(isString('aaa'))
console.log(isString([1, 2, 3]))
