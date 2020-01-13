// while working with array

// looping
// searching
// sorting

const menuItems = [
    { id: 1, name: 'nachos', price: 162, isVeg: true},
    { id: 2, name: 'truffles burger', price: 150, isVeg: false},
    { id: 3, name: 'panner burger', price: 120, isVeg: true}
]

// for loop - fastest
console.log('Total items in Cafe', menuItems.length)

for(let i =0; i < menuItems.length; i++){
    console.log(`${menuItems[i].name} - INR ${menuItems[i].price}`)
}

// forEach
menuItems.forEach(function(item){
    console.log(`${item.name} - INR ${item.price}`)
})

// 
function filterVeg(menuItems){
    let output = []
        for(let i = 0; i < menuItems.length; i++){
            if(menuItems[i].isVeg){
                output.push(menuItems[i])
            }
        }
    return output
}   

// displaying 'output' array using forEach loop
const result = filterVeg(menuItems)  // invoking filterVeg function

result.forEach(function(item){
    console.log(`${item.name} INR - ${item.price}`)
    });
