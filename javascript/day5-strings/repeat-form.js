function abbrevName(a){
    let str = a.split(' ')
    return `${str[0]} ${str[1].charAt(0).toUpperCase()}.` 
}

console.log(abbrevName('Robin singh'))