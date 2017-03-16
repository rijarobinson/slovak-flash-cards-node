//Spaghettified for now

var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database : 'slovak_english'
});

console.log('MySQL Connection details  '+connection);

connection.query('SELECT * FROM s_e_dictionary', function(err, rows, fields)
        {
        if(err) {
            throw err;
        }
        else {
                var objJson = {
                    "GroupName": "D",
                    "count": 7,
                    "teams" : JSON.stringify(rows)
                }
                console.log("stringify: " + JSON.stringify(rows));
                console.log("objJson: " + objJson.teams);

            };
       return objJson;

        })

//objJSON is coming back undefined
        exports.teamlist = objJson;


/*  var objJson = {
    "GroupName": "D",
    "count": 7,
    "teams": [ {"id":1,"english":"hello","slovak":"ahoj","image":"say-ahoj-2in.png"},
     {"id":2,"english":"good","slovak":"dobrý","image":"dobry-2in.png"},
     {"id":3,"english":"goodbye","slovak":"do videnia","image":"wave-2in.png"},
     {"id":4,"english":"how many/much?","slovak":"kol'ko?","image":"counting-2in.png"},
     {"id":5,"english":"house","slovak":"dom","image":"house-2in.png"},
     {"id":6,"english":"how?","slovak":"ako?","image":"confused-2in.png"},
     {"id":7,"english":"March","slovak":"marec","image":"cal-2in.png"} ]
  };
*/



/*function setValue(value) {
  objJson = value;
  return objJson;

}
*/

//Just an FYI on query parameters
//WHERE id IN (?,?)',[1, 7]


/*var thelist = function() {
  var objJson = {
    "GroupName": "D",
    "count": 4,
    "teams": [{
      "country": "England"
    }, {
      "country": "France"
    }, {
      "country": "Sweden"
    }, {
      "country": "Ukraine"
    }]
  };
  return objJson;
};
exports.teamlist = thelist();
*/
