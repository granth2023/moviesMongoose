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

// what is a table of reviews? 

// what is a data model? what is an erd? what is data relaiotnships? 

//what is the five step crud functionality? what is step one? what is the proper route? is it different for nested resource? how do we talk about routes? what is the method? uri? what does it do? how does it respond to that url? what do we do firsT? is it figuring out the route? why? 

// then we add routes? how? why? where? what does a route look like? what is the request passing? why is it hte url and the controller? does it contain any action? 

// is this before anyhting is written in controller? is troute first step? do we check the route in postman to see if code written correctly? 

// do we import from movies controller? why does it have that syntax 

// as movie controller? then what? 

// what would create review do? what would the function look like? does movie.review.push do anything? why? can you push whatever is coming in from post request? then can you use a save method? then why does it return a promise? what happens if save is successful what is redirect? is that a templacte? is that taking you to another url specifically? what is a nested promise? what is movie dot find by id? what is movie dot dave? why do they return as promises? what ia  dot then? what does the promise do? why not use async await? how then are we able to handle errors? what would async do? would oyu do a try catch? doe sa promise give you  better strucutre? are asynch waits used for anything? is that for http from front end and receive the response? what does it return? if redirect, do you use promises? 

// si taht going into actual database? are we making request ot actual database? 

//how do we deploy on heroku? do we hit create new projecT? are they global names? 


// do we want script tag top or bottom of the html file? how do we use axios? how do we import thing? 
//what does axios return? how do we handle it? can we do an asych await on it? 

//how do we parse through API DOCUMENTS

//how do we right random cat third party call? do we do a try cathc? why do we get a promise that is still pending? what is axios responding? is it responding apart of that? how do we jsut get the cat? 

// how do we make a api call? do we do async fucntion? do we do a axios get request? do we store that in response? do we return response dot data at a certain index? do we need to do dot url? can we return image? can we make code reusable? can we strip image out? do we create button for click and image? what are we storing in the img variable? do we make it get random cat fucntion dot url? do we call the function at the end? do we have to update the image selement for source? what happens when we get 404? if it's lib/undefined, where do we console log? how do we console log? did dot url work? do we say dot url on the img source? does this create new errors? is image elemnet correct? console llog image element? what happens when we add console log? what happens if we console dot log image source? what happens when we return a promise? from get random cat? do we need to add async await? now what? 