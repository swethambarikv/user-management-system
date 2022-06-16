const mangoose = require('mangoose');

mangoose.connect('mongodb://mongodb://localhost:27017/management', (err) =>{
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in MongoDB connection: ' + JSON.stringify(err,undefined,2));

});
module.exports = mangoose;  