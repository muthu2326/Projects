function Customer(data){
    this.accountNumber = data.accountNumber
    this.name = data.name
    this.balance = data.balance

    this.transaction = function(amount,code){
        if(code == 1){
            this.balance += amount
            return ` Deposit of amount Rs. ${amount} was successfull..! \n Avail Bal : ${this.balance}`
        }else if(code == 0){
            if(this.balance < amount ){
                return `The Balance is in-sufficient for the specified amount \n - Avail Bal : ${this.balance}`
            }else if(amount == this.balance){
                this.balance -= amount
                return `Transaction was successfull..! \n Avail Bal: ${this.balance}`
            }
        }else{
            return 'invalid input'
        }
    }
}


const c1 = new Customer({accountNumber: 123,name: 'Rahul',balance: 1000})
// console.log(c1.transaction(2000,0)})
console.log(c1.transaction(2000,1))
