// product - name, price

//book - name, price, author, pages

//mobile- name, price, model, make


class Product {
    constructor(data){
        this.id = Number(new Date)
        this.name = data.name
        this.price = data.price
    }
    deatils(){
        return `${this.name} - INR ${this.price}`
    }

    showId(){
        return this.id
    }
}

class Book extends Product {
    constructor(data){
        super(data)
        this.author = data.author
        this.pages = data.pages
    }
    details(){
        return `${super.deatils()} - ${this.author} - ${this.pages}`
    }
}

const b1 = new Book({ name: 'The day of the jacket', price: 435, author: 'Fredrick Forsyth', pages: 450})
console.log(b1)

console.log(b1.deatils())
console.log(b1.showId())




















