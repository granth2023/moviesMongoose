

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