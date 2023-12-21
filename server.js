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