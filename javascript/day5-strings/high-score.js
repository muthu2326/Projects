function highScore(a){
// let str = 'abcdefghijklmnopqrstuvwxyz'
let sum = 0
let s = []
    let word = a.split(' ')
    for(let i = 0; i < word.length; i++){
        sum = 0
        for(let j = 0; j < word[i].length; j++){
                    sum += ar[word[i].charAt(j)]
                }    
//          sum = sum + str.indexOf(word[i].charAt(j)) + 1
            s.push(sum)
        }
//         console.log(s)
//         return Math.max(...s)
return s
}
var ar = {
    h: 1,
    e: 1,
    l: 1,
    o: 1,
    w: 1,
    r: 1,
    l: 1,
    d: 5,
};
console.log(highScore('hello world'))

// let s1 = 'ac',sum = 0,i = 0
// //console.log(ar.a)
// console.log(sum)
