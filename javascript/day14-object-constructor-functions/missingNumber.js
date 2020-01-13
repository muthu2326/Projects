const array = [24,22,21,25]
array.sort()
console.log(array)

let s = array[0],e = array[array.length - 1],sum = 0,result = 0
for(let i = s; i <=e; i++){
    sum += i
}

array.forEach(function(ele){
    result += ele
})

console.log(sum - result)