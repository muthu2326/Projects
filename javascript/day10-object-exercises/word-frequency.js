// to count the word frequency of a given string

function wordFrequency(str){
    const output = {}
    if(str){
    const words =  str.split(' ')  // return type of spilt - object (array)
    words.forEach(word => {
        if(output[word]){
            output[word] += 1
        }else{
            output[word] = 1
        }
    });
    return output
    }else{
        return 'invalid input'
    }    
}

const result = wordFrequency('aba aba a-b c,a')
console.log(result)