const resturant = {
    name: '1947',
    loaction: 'jayanagar',
    type: 'Fine Dining',
    rating: 4.1,
    votes: 2224,
    cusines: ['North Indian', 'South Indian','Chinese'],
    address: 'Jayanagar 4th block',
    contact: ['12345677', '654322412'],
    reviews: [
        {
            name: 'suni',
            rating: 4.0,
            date: 01-02-2018,
            body: 'amzing place'
        },
        {
            name: 'pranav',
            rating: 3.0,
            date: 23-01-2018,
            body: 'good place'
        }
    ]
}

console.log(`${resturant.name}\n${resturant.loaction}\n${resturant.type}\n${resturant.cusines}\n${resturant.address}`)

console.log('Total reviews', resturant.reviews.length)
resturant.reviews.forEach(function(review){
    console.log(`${review.name} - ${review.rating} - ${review.date} - ${review.body}`)
})
