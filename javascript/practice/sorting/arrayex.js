var ar = [10, 20,20,10,30,10,20]
function pairArray(ar,arr){
    var pair = new Set(ar)
    var paired = Array.from(pair)
    var unique = paired.join(',')
    var arr = unique.split(',')
    var pairs = 0,count = 0
    
    for( var i = 0; i < arr.length; i++){
        for( var j = 0; j < ar.length; j++){
            if(arr[i] == ar[j]){
                count++
            }
        }
        if(count % 2 === 0){
            var n = count / 2
            pairs = pairs + n
            count = 0
        }else{
            count = count - 1
            n = count / 2
            pairs = pairs + n
            count = 0
        }
    }
    return pairs
}
console.log(pairArray(ar,arr))

