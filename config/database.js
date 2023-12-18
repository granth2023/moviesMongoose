import mongoose from 'mongoose';


const db = mongoose.connection 

mongoose.connect(process.env.DATABASE_URL)

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}':${db.port}` );
});

//what is the purpose of this stie?

//what do it means when we say process env? what are we grabbing? what are we passing this into? what value and where is that coming from when we do that? 

// 