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

// what is the populate method for? 
//what are full names? 
//what if you have a first and last name? do we create a virtual property? where do we concatonate? what is a custome instnace method? what is a custom static method? what is a pre and post event lifecycle hook? what is a pre function and post function? in case of what? what would a model require us to do? what do we want to do once model has been used? 

//what is the big picture? what is a schema? what is a model? where does it go? how do we define data structure? where does that get compiled? is schema a model? what is a catScehma? what do we store in it? what is in a schema? 

//does client need to play ncie with API? 
//why are schema and model seperated out? is there anything else you can do with a schema? do we set up properties? do we set up pre and post? can we set up validation? static methods? does this all happen in schema? does this set up default property value? what is a default property value of cat? something immutable? 


// how do we initlizae this file? what do we paste? what do we assign it to? where do we get our connection string from? 


// how do we link mongodb to mongoose? what should link look like? 


// can we use same string except for name for the db in other projects? what other package do we need to install? how do we isntall dot env  

//how do we set this up? what do we declare? what do we put in teh schema varibale? 

// waht do we set up for store new schema in? waht is new schema? what does new schema take? is it an objecT? what do we set then? what is the key and value? 

//can we set things to boolean? 

//what are the data types? what is the object hierarhcy? why are some capital