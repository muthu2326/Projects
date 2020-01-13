function func1(){
    function func2(){
        function func3(){
            const msg = 'msg from function func3'
            return msg
        }
        const result2 = func3()
        return result2
    }
    const result1 = func2()
    return result1
}

console.log(func1())