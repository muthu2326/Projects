let names = ['sheldon','lenord','penny','rajesh','howard',]

function doubleCola(ar,times){
    let n = 2
    for(let i = 0; i < times; i++){
        let temp = ar[i]
        ar.shift()
        ar.push(temp,temp)
    }
    return ar
}

console.log(doubleCola(names,6))