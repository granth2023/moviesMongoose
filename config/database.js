import mongoose from 'mongoose';


const db = mongoose.connection 

mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}':${db.port}` );
});

//what is the purpose of this stie?

//what do it means when we say process env? what are we grabbing? what are we passing this into? what value and where is that coming from when we do that? 

// do we need to destrucutre? do we grab the whole thing? how do we add nodemon to package? do we add it to scripts and start and say what? is it nodemon server.js? 

//what happens if there is a auth problem? is it a handhskae thing? 

// do we check the username and password? 

//what is the question? what is the validation? what are some ways we can validate? 

// cna we make requirments and validiaotn on models? 

// can we make sure we can implmeent a find one functionality? can we write function findOneToDo calling title? how would htat work? what parameter would we use? //