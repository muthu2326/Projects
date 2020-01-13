function highScore(a){
let str = 'abcdefghijklmnopqrstuvwxyz'
let sum = 0,h = 0
let s = []
    let word = a.split(' ')
    for(let i = 0; i < word.length; i++){
        sum = 0
        for(let j = 0; j < word[i].length; j++){
         sum = sum + str.indexOf(word[i].charAt(j)) + 1
        }
            s.push(sum)
        }
        console.log(s)
        return Math.max(...s)
}
console.log(highScore('hello world'))

