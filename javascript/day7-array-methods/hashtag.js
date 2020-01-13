function hashTagGenerator(str){
    let hashTag = '#'
    const words = str.split(' ')
    // for(let i = 0; i < words.length; i++){
    //     hashTag = hashTag + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    // } 
    
    words.forEach(function(ch){
        hashTag = hashTag + ch.charAt(0).toUpperCase() + ch.slice(1).toLowerCase()  
    })
    return hashTag
}

console.log(hashTagGenerator('hello world'))
console.log(hashTagGenerator('game changer'))




