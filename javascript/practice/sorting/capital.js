
function capitalizeWords(a){
    var capital = '',rString = '',temp = ''
    var str = a.split(' ')
    console.log(str)
    for (var i = 0; i < str.length; i++){
        capital = str[i].toString()
        rString = ''
        for(var j = 1; j < capital.length; j++){
            rString = rString + capital[j]
        }
        console.log(rString)
        temp = temp + capital[0].toUpperCase() + rString + '    '
    }
    console.log()
    return temp.slice(0,temp.length - 1)
}


console.log(capitalizeWords('hai how are you'))