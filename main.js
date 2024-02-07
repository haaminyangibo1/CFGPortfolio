//Write a for loop that goes from 10 to 0

// for (i = 10; i >= 0; i--) {
//     console.log(i)
//     if(i==0){
//         console.log("The loop has finished")
//     }
// } 


//Write an object that has movie 

let myMovie = {
    title:'Avatar 2',
    length: 190, //minutes
    releaseDate: '2022-12-16',
    seriesDetails: {
        isSeries: true,
        seriesType: 'Unknown',
        universeName: 'Avatar universe',
        numberInSeries: 2
    },
    watchedStatus: false,
    rating: function(rating){
        return `${rating}/5`
    }
}

console.log(myMovie.title +  ' is ' + myMovie.length + ' minutes long.')
console.log(`Movie #${myMovie['seriesDetails']['numberInSeries']} of the ${myMovie.seriesDetails.universeName}`)
console.log("I rate it" + myMovie.rating(5))