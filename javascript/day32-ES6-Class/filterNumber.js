class FilterNumber {
    constructor(data){
        this.values = data
        this.getEvens = function(){
            const evens = [],odds = []
            this.values.forEach(function(element){
                if(element % 2 == 0){
                evens.push(element)
                }
            });
            return evens
        }

        this.getOdds = function(){
            const odds = []
            this.values.forEach(function(element) {
                if(element % 2 == 1){
                    odds.push(element)
                }
            });
                return odds
            }
    }
}


const numbers = new FilterNumber([10,20,15,23,30,25])
console.log(numbers.getEvens())
console.log(numbers.getOdds())
