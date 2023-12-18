

router.get('/', function(req, res) {
    res.render('index', { title: 'Mongoose Movies'})
})

// what is middleware? 
//we process http, build routes, view engine to render dynamic templates OR send back dataa in different formats like json 

//function(req, res)  is a callback function
//next --> what is that saying? move onto the next function? 
//what is the next funciton? what is a way for middleware to go to the next step? 
//what do we look for in server dot js, whats the first thing we do? how do we call express into a variable? what do we add? what does the app use? what happens when a request comes in? what does it hit first? what does it do to the request? what does it add? what does next do? waht is path middleware? what is cors using? is cors using next? what happens when it calls next? what does a route do? how does it accept requests at urls? how do we runt he server? what port? 