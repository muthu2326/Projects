const products = [
    {id: 1, name: 'marker'},
    {id: 2, name: 'scale'}
]

const reviews = [
    {id: 1, product: 1, title: 'good product'},
    {id: 2, product: 1, title: 'ok'},
    {id: 3, product: 2, title: 'not bad'},
]

function findProduct(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){

            const product = products.find(function(product){
                return id == product.id
            })
            if(product){
                resolve(product)
            }else{
                reject('product not found')
            }
        }, 500)
    })
}


findProduct(10)
    .then(function(product){
        console.log(product)
    })
    .catch(function(err){
        console.log(err)
    })

    findProduct(2)
    .then(function(product){
        console.log(product)
    })
    .catch(function(err){
        console.log(err)
    })

