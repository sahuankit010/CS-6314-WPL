var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Vidzy');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    const collection = db.get('videos');
    console.log(collection)
    collection.find({}, function (err, videos){
        if(err) throw  err;
        res.json(videos);
    });
});

//
// router.get('/', function(req, res, next) {
//     // res.send('respond with a resource');
//     const collection = db.get('videos');
//     console.log(collection)
//     collection.find({}, function (err, videos){
//         if(err) throw  err;
//         res.json(videos);
//     });
// });

module.exports = router;
