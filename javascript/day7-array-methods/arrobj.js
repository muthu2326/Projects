let item = [
    {
        cid: 1,
        itemCat: 'electronics',
        itemName: 'Mobile',
        price: 15000
    },
    {
        cid: 2,
        itemCat: 'electronics',
        itemName: 'EarPhone'
    },
    {
        cid: 3,
        itemCat: 'Home',
        itemName: 'Table'
    },
    {
        cid: 4,
        itemCat: 'electronics',
        itemName: 'Mobile',
        price: 6000
    },
]

let result = item.filter(function(item){
    return item.itemCat == 'electronics'
})

console.log(result)

result.forEach(function(item){
    console.log(`${item.cid} ${item.itemName}`)
})

result = item.find(function(item){
    return item.price <= 10000
})
console.log('Items below price 10K:')
console.log(`item code: ${result.cid} \nitem name: ${result.itemName}`)

