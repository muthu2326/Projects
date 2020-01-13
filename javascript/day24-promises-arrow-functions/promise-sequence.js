// in asynchronous api calls of 2 servers we dont know which is going to execute first 

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
            }
        },time2);
    })
}


function  makeApi3() {
    const time3 = Math.round(Math.random() * 1000)
    return new Promise(function(resolve,reject){
        setTimeout(function(){
         let n3 = Math.round(Math.random() * 10)
            console.log('api3', time3)
            if(n3 % 2 == 0){
                resolve(n3)
            }else{
                reject('error: odd number')
            }
        },time3);
    })
}


function makeApi4(){
    const time4 = Math.round(Math.random() * 1000)
    return Promise(function(resolve,reject){
        setTimeout(function(){
            let n4 = Math.round(Math.round() * 10)
            console.log('api4', time4)
            if(n4 < 10){
                resolve(n4)
            }else{
                reject('n4 is not less than 10')
            }
        }, time4)
    })
}
    makeApi1()
        .then(function(num){
            console.log('n1', num)
            return makeApi2()
        })
        .then(function(num){
            console.log('n2',num)
            console.log('sum of n1 and n2', n1 + n2)
            return makeApi3()
        })
        .then(function(num){
            console.log('n3', num)
            console.log('mul of n1 and n3', n1 * num)
            return makeApi4()
        })
        .then(function(num){
            console.log('n4',num)
        })
        .catch(function(err){
            console.log(err)
        })

