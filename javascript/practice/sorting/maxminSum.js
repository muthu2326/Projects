function miniMaxSum(arr) {
    let maxSum = 0, minSum = 0
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] != max)) {
            maxSum = maxSum + arr[i]
        }else if (arr[i] != min) {
            minSum = minSum + arr[i]
        }else if (max == min) {
            maxSum = maxSum + arr[i]
            minSum = minSum + arr[i]
        }
    }
    return `${maxSum} ${minSum} `
}

console.log(miniMaxSum([5,5,5,5,5]))