
var data = [
    [ 'animals',
      [
        'dogs', ['Corgi', 'Sheltie'],
        'cats', ['Tabby','Black'],
        'pigs', ['Teacup']
      ]
    ],
    [ 'guitars',
      [
        'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
        'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul'],
        'jeans', ['Telecaster', 'Stratocaster','Jazzmaster'],
      ]
    ]
  ];

  console.log(objectifier(data))

function objectifier(a) {
    if (!a) {
        return 'invalid input'
    } else {
        let obj = {}
        for (let i = 0; i < a.length; i++) {
             obj[a[i][0]] = createObj(i,a)             
        }
        return obj
    }
}

function createObj(i,a) {
    let obj = {}
        let k = 1
        for (let j = 0; j < a[i][1].length; j += 2){
            obj[a[i][1][j]] = a[i][1][k3]
            k += 2
        }
    return obj
}