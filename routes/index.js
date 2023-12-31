

router.get('/', function(req, res) {
    res.render('index', { title: 'Mongoose Movies'})
})

// what is middleware? 
//we process http, build routes, view engine to render dynamic templates OR send back dataa in different formats like json 

//function(req, res)  is a callback function
//next --> what is that saying? move onto the next function? 
//what is the next funciton? what is a way for middleware to go to the next step? 
//what do we look for in server dot js, whats the first thing we do? how do we call express into a variable? what do we add? what does the app use? what happens when a request comes in? what does it hit first? what does it do to the request? what does it add? what does next do? waht is path middleware? what is cors using? is cors using next? what happens when it calls next? what does a route do? how does it accept requests at urls? how do we runt he server? what port? 
//what is a root router? what is a route? what does route match to? what is a router? what does it allow us to do? what if you don't use the next? would it stop? why are using phrase rootRouter when we are not using that term in the routes page? what happens if you hit local host 3000? what would happen if it didn't exist? can we name in the server dot js? what are we importing from? do we import from routes? is cors a middelware? what does cors allow in your server js? how does it work well iwth html? why are we suing cors middleware? how does it circumvent safety features? what does cors do? is it a security feature? 

//what does the pipeline look like? what comes first? what is a http request? where does it go next? what is the first middelware? waht is a logger? where do you see it in dev tools? what does logger allow you to do? do you see the node console better? how do you pass it in? what is a dev environment? what is app dot use? what is next? what does epxress json do? how does it add properties to json? how does it parse? how do we pass into the app dot use? what next? what about form data? then what? what passes through app dot use? how we do add image passes? how do we serve css from server? how would you set up an images api? 

//how do we send static assests from server?
// what goes into middleware? is a route part of it? how do you define which routes are exposed to public? what do routes expose? what functionalites are exposed? what does public know? 

//then what does it do? next? or what? could that be it?  

//what is a controller? is it importnat for middleware? what is a controller vs routes? why do they exist? why are they seperate from router? how do we stay organized? is it easier to see routes as themselves? are the conrollers modularized? 

//what is express dot json? what is the same? what is cors fucntionality? is middleware just one line or can be many? how does it go to the next hting? 

//what is a req.time being set? how do we add a time to a request we get? how does it become availabel to everything after? is it useful for server to know when request happened? if its in app.use how would it be useful? would it pop up later? what is req.basePath, what did we set it to? 

//how do we query mongo directly from routes? how do we respond to this? 

//what happens if if we put route below routes? is what we add in the lower one, available in the higher ones? why do we put middleware functionality in certain locations? is it useful in indexRouter? do we exist funnel when we access router? 

//what is a method override middleware? is it necessary? how does it transmute anything for delete or update? you import it as what? how do you use it? does it become part of middleware? 

//how many nice middlewares are out there? how do you add middleware to code? is it app dot use? 

//is node synchronous ?is middleware asych? should it be asynchronous? do we wnat it to hit middleware b efore it hits the routes? do we want other things happening simulataneously? 

//where is next being called? what is going inside app dot use? is it calling next? can we find the under the hood stuff for cors in the modules? waht is a cors function? 

//can we set up any middleware to do random stuff? what do we ultmately want to do with our server? do we want to return a response in a specific format? what format are we using? 

//does next have an order of opertaions? waht is it saying? what app dot waht is it using? have we been using for our http requests? can we do asych await? do we use it on the front end? what does fetch respond with? does it respond with a promise? can we use a dot then or an asych await for both? is asych simpler way to do dot then? does dot then have more granular functinality? is asych await more basic? which do we do for single request and response? is next for middleware? is next a feature of express or node? why express? 


//what is mongoose? what is a schema? is mongod non strucutreD? why are we creating a strucutre? can we do validations on it? 

//do apps benefit for stuctured data? is this analoguous to typed and dynamic language? 
//why was typescript created? 
//why was mongodb created? is it strucutred out of the box? can we make it strucuted? 
// what property values should be? what are dot body? when we define data how do we define the property value, the data type? is that data validation? what is default property values? what if someone doesnot provide the data? what is data validation? what do we need to make sure a title is? a string? numbeR? 
//