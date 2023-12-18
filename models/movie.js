import mongoose from 'mongoose';

const Schema = mongoose.Schema

const movieSchema = new Schema({ 
    title: String, 
    releaseYear: Number, 
    mpaaRating: String,
    cast: [String], 
    nowshowing: Boolean,
},{
    timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
    Movie
}

///why was mongodb created? is it strucutred out of the box? can we make it strucuted? 
// what property values should be? what are dot body? when we define data how do we define the property value, the data type? is that data validation? what is default property values? what if someone doesnot provide the data? what is data validation? what do we need to make sure a title is? a string? numbeR? 