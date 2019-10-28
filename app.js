//Load express module with `require` directive
var express = require('express')
var app = express()

const router = express.Router();

const path = __dirname + '/views/';

//Define request response in root URL (/)
// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req,res){
    res.sendFile(path + 'index.html');
});

router.get('/about', function(req,res){
    res.sendFile(path + 'about.html');
});

//  mount the router middleware and the application’s static assets
app.use(express.static(path));
app.use('/', router);

//Launch listening server on port 8081
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})
