 function updateInventory(currentInventory,newInventory){
    let item   
    if(!currentInventory || !newInventory){
        return 'invalid input'
    }   else{
        newInventory.forEach(newItem => {
            item = currentInventory.find(function(n){
               return n.name == newItem.name
           })
               if(item == undefined){
                   currentInventory.push(newItem)
               }else {
                   item.stock += newItem.stock
               }
       });

   return currentInventory
    }
     }

var currentInventory = [{name: "Mi", stock: 5}, {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

var newInventory = [ {name: "Mi", stock: 8}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];

console.log(updateInventory(null,newInventory))
console.log(updateInventory(currentInventory,newInventory))