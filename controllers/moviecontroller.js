import { Movie } from "../models/movie";


//how do we add to the database
function insertDummyMovie(){
    Movie.insertOne
    Movie.insertMany({
    title: "title", 
    releaseYear: 2019, 
    mpaaRating: "R",
    cast: ["me you"], 
    nowshowing: False
})
}

export {
    insertDummyMovie
}
