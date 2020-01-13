function printDuplicateCharacters(a){
    let count = 0,temp = ''
    if (!a) {
       return 'invlsid input'
    } else {
        for (let i = 0; i < a.length; i++){
            count = 0
            for (let j = 0; j < a.length; j++){
                if (a[i] == a[j]) {
                    count++
                }
            }
            if ((count > 1) && (!temp.includes(a[i]))){
                    temp = temp + a[i]           
             }
        }
    }
    return temp
}
console.log(printDuplicateCharacters('sad'))