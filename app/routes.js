var login = require('./models/login');
var drop = require('./models/drop');
var test_data = require('./models/test_data');
function getvalues(res) {
    data.find(function (err, lms) {       
        if (err) {
            res.send(err);
        }
        res.json(lms); 
    });
};
module.exports = function (app) {
    app.get('/api/data', function (req, res) { 
               console.log("code",req.query)
        data.find({},function (err, todo) {
            console.log(todo)
            if (err)
                res.send(err);
           res.send(todo);
        });
    });
    app.get('/api/hostel', function (req, res) { 
        console.log("code",req.query)
 hostel.find({},function (err, todo) {
     console.log(todo)
     if (err)
         res.send(err);
    res.send(todo);
 });
});

    app.post('/api/data', function (req, res) {  
        console.log(req.body);
              
        data.create({
            name: req.body.name,
            time: new Date(),
            phone: req.body.phone,
            count : req.body.count,
            ccount : req.body.ccount,
            ocount : req.body.ocount,
            preg : req.body.preg,
            asap : req.body.asap,
            location : req.body.location,
            comment : req.body.comment
        }, function (err, todo) {
            console.log("response");
            if (err){
                console.log("creation err");
                res.send(err);
            }
            else{
                console.log("created");
                res.send(todo);
            }
        });
       
    });

    app.get('/api/login', function (req, res) { 
        console.log("code",req.query.phone)
            
        login.findOne({
         phone:  req.query.phone,
        }, function (err, todo) {
         console.log("todo",todo, 'err',err);
         if (err){
        console.log("err happend!!");
        // res.sent(1)
         }
         res.send(todo);
});

});

    app.post('/api/login', function (req, res) {  
        console.log(req.body.code);
              
        login.findOne({
            phone:  req.body.phone,
        }, function (err, todo) {
            console.log("todo",todo, 'err',err);
            if (err){
                console.log("exist");
                res.sent(1)
                
            }
            else if(todo==null){
                console.log("!exist");
                login.create({
                    phone: req.body.phone,
                    time: new Date(),
                    password : req.body.password,
                    department : req.body.department,
                    details : req.body.details

                }, function (err, todo) {
                    console.log("response");
                    if (err){
                        console.log("creation err");
                        res.send(err);
                    }
                    else{
                        console.log("created");
                        res.send(todo);
                    }
                });
            }
            else 
            res.send(todo);
        });
       
    });

    app.get('/api/drop', function (req, res) { 
        console.log("code",req.query)
 drop.find({},function (err, todo) {
     console.log(todo)
     if (err)
         res.send(err);
    res.send(todo);
 });
});

app.post('/api/drop', function (req, res) {  
    console.log(req.body);
          
    drop.create({
        item: req.body.item,
        time: new Date(),
        quantity: req.body.quantity,
        cost : req.body.cost,
        
        exp : req.body.exp
    }, function (err, todo) {
        console.log("response");
        if (err){
            console.log("creation err");
            res.send(err);
        }
        else{
            console.log("created");
            res.send(todo);
        }
    });
   
});
// Angular 
// app.get('/api/test_data', function (req, res) { 
//     console.log("code",req.query)
// test_data.find({},function (err, todo) {
//  console.log(todo)
//  if (err)
//      res.send(err);
// res.send(todo);
// });
// });

// app.post('/api/test_data', function (req, res) {  
// console.log(req.body);
      
// test_data.create({
//     name: req.body.name,
//     time: new Date(),
//     phone: req.body.phone,
//     address : req.body.address,
    
//     exp : req.body.exp
// }, function (err, todo) {
//     console.log("response");
//     if (err){
//         console.log("creation err");
//         res.send(err);
//     }
//     else{
//         console.log("created");
//         res.send(todo);
//     }
// });

// });

// =========
// gold project====
// app.post('/api/gold', function (req, res) {  
//     console.log(req.body);
          
//     gold.create({
//         code: req.body.code,
//         time: new Date(),
//         value: req.body.value,
       
//     }, function (err, todo) {
//         console.log("response");
//         if (err){
//             console.log("creation err");
//             res.send(err);
//         }
//         else{
//             console.log("created");
//             res.send(todo);
//         }
//     });
   
// });

// app.get('/api/gold', function (req, res) { 
//     console.log("gold query",req.query)
// gold.find({},function (err, todo) {
//  console.log(todo)
//  if (err)
//      res.send(err);
// res.send(todo);
// });
// });



};
