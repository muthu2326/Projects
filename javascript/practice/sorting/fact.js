function factorial(n) {
    let result = 0
    while(n > 0){
        result = n * n-1
        n--
    }
    return result
}

console.log(factorial(5))