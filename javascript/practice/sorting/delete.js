// const person = {
//     name: "Ramesh",
//     age: 22,
//     profession: "full stack developer",
// };

// // for(let key in person){
// //     console.log(key)
// // }
// // // console.log(delete person.city

// // const array = [10,230,30]

// // for (const key of array) {
// //     console.log(key)
// // }


// console.log(Object.keys(person))

// Initialize an object
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

user.password = '*******';
user.active = true;

console.log(user);
//console.log(newUser)