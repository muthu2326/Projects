function HashTag(str){
    this.str = str
    this.generator = function(){
        str = this.str.split(' ')
        let string = ''
        str.forEach(ele => {
            string += ele[0].toUpperCase() + ele.slice(1).toLowerCase()
        });
        return `#${string}`
    }
}

const hash = new HashTag('make in india')
console.log(hash.generator()) 