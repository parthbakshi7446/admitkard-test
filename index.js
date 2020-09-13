let express = require('express');

let app = express();
let port = 8000;

const db = require('./config/mongoose');

//to extract info from url
app.use(express.urlencoded());

//use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log(`running on port ${port}`);
});