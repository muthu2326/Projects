// 'this' - keyword refers to the current object

const player = {
    name: 'rahul',
    greet: function(){
        return 'Hello, my name is',this.name
    },
    sayHello: function(str){
        return `Hello ${str}, my name is ${this.name}`
    }
}
console.log(player.sayHello('kavi'))