function firstElements(a, b) {
    if (b == undefined) {
        return a[0]
    }
        let output = []
    if (a.length == 0) {
        return a
    } else if (b > a.length || b < 0) {
        return a
    }else if(b != undefined){
          for (let i = 0; i < b; i++){
                output.push(a[i])
            }
            return output
    }
}
    
console.log(firstElements([8,9,0,-2]))