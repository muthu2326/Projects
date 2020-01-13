function includes(a, b) {
    if (a.length == 0) {
        return false
    } else {
        for (let i = 0; i <= a.length; i++) {
            if (a[i] == b) {
                return true
            } else {
                return false
            }
        }
    }
}
console.log(includes([1,2,3,4],4))