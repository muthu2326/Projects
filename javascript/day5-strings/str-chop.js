function stringChop(str,n){
    let a = []
    let temp = ''
    for(let i = 0; i < str.length; i = i + n){
        a.push(str.substr(i,n))
    }
    return a
}
console.log(stringChop('resource',2))