const myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        const randomNumber = Math.round(Math.random() * 10)
        if(randomNumber % 2 == 0){
            resolve(randomNumber)
        }else{
            reject(randomNumber)
        }
    },1000)
})

myPromise
    .then(function(number){
        console.log('even', number)
    })
    .catch(function(number){
        console.log('odd', number)
    })