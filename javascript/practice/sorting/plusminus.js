function plusMinus(arr) {
    let plus = 0, minus = 0, zero = 0,div = arr.length,count= 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0) {
            zero++
        } else if (arr[i] > 0) {
            plus++
        } else if(arr[i] < 0) {
            minus++
        }
    }
    return `${(plus/div).toFixed(6)}\n${(minus/div).toFixed(6)}\n${(zero/div).toFixed(6)}`
}


console.log(plusMinus([-4, 3, -9, 0, 4, 1]))