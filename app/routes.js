var login = require('./models/login');
var stock = require('./models/stock');
var order = require('./models/order');
// var shop = require('./models/shop');


function getvalues(res) {
    data.find(function (err, lms) {       
        if (err) {
            res.send(err);
        }
        res.json(lms); 
    });
};
module.exports = function (app) {
    // app.get('/api/stock', function (req, res) { 
    //            console.log("code",req.query)
    //     stock.find({},function (err, todo) {
    //         console.log(todo)
    //         if (err)
    //             res.send(err);
    //        res.send(todo);
    //     });
    // });

    // app.post('/api/stock', function (req, res) {  
    //     console.log(req.body);
              
    //     stock.create({
    //         stockNo: req.body.stockNo,
    //         time: new Date(),
    //         quantity : req.body.quantity,
    //         cost : req.body.cost,
    //         itemName : req.body.itemName
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

    app.get('/api/login', function (req, res) { 
        console.log("code",req.query.phone)
            if(req.query.phone == "404"){
                login.find({},function (err, todo) {
                    console.log(todo)
                    if (err)
                        res.send(err);
                   res.send(todo);
                });
            }else{
        login.findOne({
         phone:  req.query.phone,
        }, function (err, todo) {
         console.log("todo",todo, 'err',err);
         if (err){
        console.log("err happend!!");
        // res.sent(1)
         }
         res.send(todo);
});}

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
                    details : req.body.details,
                    lat : req.body.lat,
                    log : req.body.log
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

    app.get('/api/order', function (req, res) { 
        console.log("code",req.query)
 order.find({},function (err, todo) {
     console.log(todo)
     if (err)
         res.send(err);
    res.send(todo);
 });
});

app.get('/api/stock', function (req, res) { 
    console.log("code",req.query)
stock.find({},function (err, todo) {
 console.log(todo)
 if (err)
     res.send(err);
res.send(todo);
});
});

app.post('/api/order', function (req, res) {  
    console.log(req.body);
          
    order.create({
        itemName: req.body.itemName,
        time: new Date(),
        stockNo: req.body.stockNo,
        shopName : req.body.shopName,
        quantity: req.body.quantity,
        phone : req.body.phone
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

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/dist/foodapp/index.html'); 
});
app.get('/customer', function (req, res) {
    res.sendFile(__dirname + '/dist/foodapp/index.html'); 
});
app.get('/delevery', function (req, res) {
    res.sendFile(__dirname + '/dist/foodapp/index.html'); 
});
};
