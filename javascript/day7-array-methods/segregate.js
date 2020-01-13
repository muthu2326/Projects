function sortArray(numbers){
    let evens = []
    let odds = []
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evens.push(numbers[i])
        }else{
            odds.push(numbers[i])
        }
    }
    evens.sort(function(a,b){ return a - b})
    odds.sort(function(a,b){ return a - b})
    return evens.concat(odds)
}

const result = sortArray([12, 34, 45, 9,8,90,3])

console.log(result)