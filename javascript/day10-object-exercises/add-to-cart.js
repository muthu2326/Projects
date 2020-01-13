const cart = []

function addToCart(cart,products){
    const cartItem = cart.find(function(item){
        return item.id == products.id
    })
    if(cartItem){
        cartItem.quantity += products.quantity
    }else{
        cart.push(products)
    }
    return cart
}

console.log(addToCart(cart,{ id: 1,name: 'marker', price: 10, quantity: 1}))
console.log(addToCart(cart,{ id: 2,name: 'pen', price: 20, quantity: 1}))
console.log(addToCart(cart,{ id: 1,name: 'marker', price: 10, quantity: 3}))
console.log(addToCart(cart,{ id: 3,name: 'board', price: 300, quantity: 1}))
