function firstElements(a, b) {
    if (a.length == 0) {
        return a
    } else if (b == 'undefined') {
        return a.slice(0,1)
    }
}
console.log(firstElements([7,9,0,-2],'undefined'))