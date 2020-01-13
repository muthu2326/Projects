
function findSum(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}

function balancedArray(numbers){
    const midIndex = numbers.length / 2
    const leftArray = numbers.slice(0,midIndex)
    const rightArray = numbers.slice(midIndex)

    const leftSum = findSum(leftArray)
    const rightSum = findSum(rightArray)

    if(leftSum < rightSum){
        return `left array is less by ${rightSum - leftSum}`
    }else if(leftSum > rightSum){
        return `right array is less by ${leftSum - rightSum}`
    }else{
        return 'left array and right array are equal'
    }

    // return Math.abs(rightSum - leftSum)
}

console.log(balancedArray([1,2,1,2,1,3]))
console.log(balancedArray([30,10]))