function totalCaps(a) {
    let count = 0
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < a[i].length; j++)
            if (a[i].charAt(j) == a[i].charAt(j).toUpperCase()) {
            count++
        }
    }
    return count
}
console.log(totalCaps(['Abc','bCa']))