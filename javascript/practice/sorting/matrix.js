var a = [
    [1, 2, 8],
    [3, 2, 1],
    [1, 1, 3]
];
function diagonalDifference(arr) {
    let n1 = 0,n2 = 0,temp = 0
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            n1 = n1 + arr[i][j]
            i++
        }
    }
    for (i = 0; i < arr.length; i++){
        for (j = arr.length - 1; j >=0; j--){
            console.log(arr[i][j])
            n2 = n2 + arr[i][j]
            i++
        }
    }
    return Math.abs(n1 - n2)
}
console.log(diagonalDifference(a))