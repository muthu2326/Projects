const  persons = [
    {id: 1, name: 'rahul', email: 'rahul@gmail.com'},
    {id: 2, name: 'jagan', email: 'jagan@gmail.com'},
    {id: 3, name: 'kavya', email: 'kavya@gmail.com'},
    {id: 4, name: 'ramesh', email: 'ramesh@gmail.com'},
    {id: 5, name: 'nithya', email: 'nithya@gmail.com'}
]

handleSearch = (value) => {
    const search = persons.filter((person) => {
//        return person.name.includes(value) || value == person.id || person.email.includes(value)
          return Object.values(person).includes(value)
    })   

    return search
}

console.log(handleSearch('rahul'))
