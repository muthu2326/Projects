function reverseWords(str){
    
    return str.split('.').reverse().join('.')
}

console.log(reverseWords('hello world'))
console.log(reverseWords('i.like.this.progrm.very.much'))

function reverse(str){
    let ar = str.split('.'),temp = ''
    for(let j = ar.length - 1; j >= 0; j--){
        temp = temp + ar[j] + '.'
    }
    return temp.slice(0,temp.length - 1)
}

console.log(reverse('hello.world'))
console.log(reverse('i.like.this.progrm.very.much'))