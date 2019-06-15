const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user:user@cluster0-qmnh7.mongodb.net/test?retryWrites=true&w=majority";
const app = express();
//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.post('/post-feedback', function (req, res) {
    MongoClient.connect(url, function(err, db) {
     
    }); 
    res.send("Thank You for your feedback");
       // res.redirect( '/#/products');
});

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("users");
        app.post('/subscribe', function(req,res){ 
            var name = req.body.name; 
            var email =req.body.email; 
            var pass = req.body.password; 
            var phone =req.body.phone; 
          
            var data = { 
                "name": name, 
                "email":email, 
                "password":pass, 
                "phone":phone 
            }
        
        dbo.collection("Users").insertOne(data, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });      
    return res.redirect('/'); 
});
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
});