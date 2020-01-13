function find(array){
    const result = array.find(function(ele){
        return ele < 20
    })
    return result
}

console.log(find([12, 11, 1,24,44]))