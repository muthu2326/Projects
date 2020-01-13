function properNounFilter(a){
    let temp = a[0].toUpperCase() + a.slice(1).toLowerCase()
    console.log(a[0])
    if (!a) {
        return 'invalid input'
    } else if (a == temp) {
        return true
    } else { return false }
}
    console.log(properNounFilter('Coffee'))