function camelize(a) {
    var str = '',ar,tar = []
    if (a == '') {
        return ''
    } else {
        ar = a.split(' ')
        for(var i = 0; i < ar.length; i++){
            temp = ar[i].toLowerCase()
            if(i == 0){ 
                tar.push(temp)
            }else{k
            temp = temp[0].toUpperCase() + temp.slice(1,temp.length)
            tar.push(temp)
        }
    } 
        console.log(tar.join(''))
    }
    return ''
}

console.log(camelize('JavaScript Exercises'))
console.log(camelize('Javascript'))
console.log(camelize('arRayList')) 