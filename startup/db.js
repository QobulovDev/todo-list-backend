const mongoose = require('mongoose');
const config = require('config')

module.exports = function(){
    mongoose.connect(config.get('dbConnectURL'))
        .then(()=>{
            console.log('DB connection is succsess');
        })
        .catch(err=>{
            console.log(`db connection error: ${err}`);
        });
}