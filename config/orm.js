var connection = require("./connection.js");

const tableName = "burgers";

///////////////// Helper Function //////////////////

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


///////////////////////////// ORM ////////////////////////////////// 

  var orm = {
    selectAll: function(tableName, cb) {
      var queryString = `SELECT * FROM ${tableName};`;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        console.log("Displaying all burgers now!");
        cb(result);
      });
    },
    insertOne: function(tableName, cols, vals, cb) {
      var queryString = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
  
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        console.log("You have successfully added your burger!");
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(tableName, objColVals, condition, cb) {
      var queryString = `UPDATE ${tableName} SET ${cols.toString()} = ? WHERE ${condition}`;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  }
  module.exports = orm;
  