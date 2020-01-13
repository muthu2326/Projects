const person = {
    name: 'Marina',
    age: 29
  };

  // const person2 = person

  // person2.age = 18

  // console.log(person,person2)

  // const animals = ['Cat', 'Dog', 'Horse', 'Snake'];

  // let animals2 = animals.slice()

  // console.log(animals2)

  // animals2[3] = 'shark'

  // console.log(animals2)

  // let animals3 = [].concat(animals)
  // console.log(animals3)

  // animals3[2] = 'Pig'
  // console.log(animals3)
  // console.log(animals)


  // let animals4 = [...animals]
  // console.log(animals4)

  // animals4[1] = 'Monkey'
  // console.log(animals4)
  // console.log(animals)

  // const car = {
  //   model: 'suziki',
  //   year: 1990
  // }

  // let human = Object.assign({}, person, { age: 20 });
  // let cars = Object.assign({},car,{ model: 'maruthi'},{year: 2015})
  // console.log(person, human)
  // console.log(car,cars)


  // let temp = JSON.parse(JSON.stringify(car))
  // temp.model = 'Tata'
  // temp.year = 2018

  // console.log(car,temp)

  // const scaryThings = ['spiders', 'Cruella de Vil'];

  // function inspireFear(scaryThings){
  //   scaryThings.push('Snakes');
  //   scaryThings.push('no internet');
  //   scaryThings.push('low battery and no charger');
  // }
  
  // inspireFear(scaryThings);
  // console.log(scaryThings);

  console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) { 
  return n * n; 
}