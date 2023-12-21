import 'dotenv/config.js';
import logger from 'morgan'

import './config/database.js';

//what are putting in here? are we importing our database? what is this import doing? is this the entry port of our app? why assign database module to variable? what do we need to do to make code run? what do we need dot env file? dot config? what do you think? what do you think? 
//how do we get controller here? 

import { insertDummyMovie } from './controllers/moviecontroller.js';

//HACKY! 

//what do we import here?


//function insert? 

//what is the flow of data?how does data flow? do you need a different set? how do we do that?? what are routes? what are controllers? are routes controlled with single resource? Waht are uri's fetching? what happens wehn we add new resources? do we need new models? rotues? controllers? 

//what goes into ERD?
//what is authorizing users? what do you want authroizzed users to do? what would be different? 
//are erd able to show us how database is structured? what lives in database? how do we create relationshisp between data? are some data dependent on one another? what are relationships in a phones model? what is the relationship between phone and model? does code udnerstand that? how do we get it to? somethign in code that does that? does eRD represent this? how do we add code to models? 

//how do we model related data? what is embedding? what is referencing? is this when parent docuemnts hold entire sub documents? what is referencing? is that just the related docuemnts? 

//what is the biggest difference? is reference just holding string of ID? what is embedding? is that holding the whole model? 

// how do you reference actual data? meaning what? do you access the parent doc and then get the child id? do you make another http request to get the thing that you are referencing? can you use them simulatnesouly? 

// how would you show embedded? is it an array as one of the values? does it hold different type of values? is it holding the netire contact and then different things inside of that? What would a reference be? would it jsut be an id? 

//is embedding entire document wihtin? is that just one request? 

// does that reference something else? is there a model for contacts? tado you have a poeple colleciton and a contact colelciton? can you reference them? how does searching work in sub documetn or reference id? can you jsut find an object id? can you filter by type? can you get all contacts in array? can you reference something and object id being referenced, does it know its being referenced? 

//is object id default? do oyu need to define that in model? what if oyu want to make your own? what if iy ou want a different stirng? is object id out of the box?  

// can oyu make it more individulaized? can it populate the two? can oyu go back and grab an id and then implement? can you skip that?

// do id's get stored get stored in same database? do they get stored in same collections? 

// when you create another model, does it create another collection? 

//what are the models? people and contacts? are they two different models? do they refer to each other? 

// what is the relationship beetween multiple models? how do we define these relationshiops? waht is a cardinal? what do they tell you ?what are relationships to one another? 

// one moive has mulitple reviews. review belongs to a movie. is it a one to many relationship? 

//what are other one to many relationships? a post with mulitple likes? is the sun?what is a many to many? what is a relationship? does a movie have many performers? does an actor have many movies? is that many to many?  is it sharable? a school has? many products orders? social 

//library books? can you those books be held? 

//how do we embedd review into movies? 

// how do we create schema for subdocument? what do we call that? how do we put schemas into same file? how do we sperate them? is it better if we do? what does mongoose allow us to do on models? what is a min value? does timestamp create it? what is a review schema? 

// how do define a movie schema?  whould it have reviews array? do we add a reviews aray into movies? do we modularize schemas? do we import them? how do we embedd review schema into movie schema? when we create review do we just add it to movie? so what does that look like for ERD? would you create a table? what is each column? are they field and type, is that the minimum? what is the option? 

// each review get put array, does it have to abide by review schema? could cast be? 

//one to many, how do we draw this? what is lucid app? 