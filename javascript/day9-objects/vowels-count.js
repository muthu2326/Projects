// to find the the number of vowels in a given string

function countVowels(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++
        }
    }
    return count
}

const result1 = countVowels('aniruddha')
console.log(result1)

// to find the the each vowels count in a given string

function countVowelsTimes(str){
    const output = {  a: 0, e: 0, i: 0, o : 0, u: 0 }
     for(let i = 0; i < str.length; i++){
         if(output[str[i]] != undefined){
            output[str[i]] += 1
         }
     }
     return output
}


const result2 = countVowelsTimes('aniruddha')
console.log(result2)
