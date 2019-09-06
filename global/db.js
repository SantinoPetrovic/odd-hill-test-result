const sqlite3 = require('sqlite3');

module.exports = function () { 
    return new sqlite3.Database("../data/bookshelf.sqlite", function(err){
        if (err) {
            return err;
        }
    });
};