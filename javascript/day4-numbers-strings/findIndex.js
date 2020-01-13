const word = 'javascript'

console.log(word.includes('a'))

const search = 'z'
    if(word.includes(search)){
        console.log(`${search} is present in the string`)
    }else{
        console.log(`${search} is not present in the string`)
    }

if(word.indexOf(search) >= 0){
    console.log(`${search} is present in the string`)
}else{
    console.log(`${search} is not present in the string`)
}

