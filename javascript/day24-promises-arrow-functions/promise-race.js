let n1, n2 

function  makeApi1() {
    const time1 = Math.round(Math.random() * 1000)
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            n1 = Math.round(Math.random() * 10)
            console.log('api1', time1)
            if(n1 % 2 == 0){
                resolve(n1)
            }else{
                reject('error: odd number')
            }
        },time1);
    })
}

function  makeApi2() {
    const time2 = Math.round(Math.random() * 1000)
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            n2 = Math.round(Math.random() * 10)
            console.log('api2', time2)
            if(n2 % 2 == 0){
                resolve(n2)
            }else{
                reject('error: odd number')
            }
        },time2);
    })
}

// only return one promise either one of the promise in the array gets resolved or rejected
Promise.race([makeApi1(), makeApi2()])
    .then(function(num){
        console.log('output',num)
    })
    .catch(function(err){
        console.log(err)
    })
