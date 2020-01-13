   //1994 - 2015 during this time no const keyword
   //2015 - ES6, ES2015

// cannot re-assign - re-declare
   const capital = 'bangalore'
   console.log(capital)

   
   //TypeError: Assignment to constant variable.
   //capital = 'mysore'
   //console.log(capital)

   //SyntaxError: Identifier 'capital' has already been declared
    //const capital = 'new delhi'
   //console.log(capital)
   // const is block scoped
   // life of const keyword is within {}