

router.get('/', function(req, res) {
    res.render('index', { title: 'Mongoose Movies'})
})

// what is middleware? 
//we process http, build routes, view engine to render dynamic templates OR send back dataa in different formats like json 