//Spaghettified for now

var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'ticho',
    password: '400RAY4201db3rg!',
    database : 'slovak_english'
});

console.log('MySQL Connection details  '+connection);

http.createServer(function (request, response)
{
        console.log('Creating the http server');
        connection.query('SELECT * FROM s_e_dictionary', function(err, rows, fields)
        {
                console.log('Connection result error '+err);
                console.log('no of records is '+rows.length);
                response.writeHead(200, { 'Content-Type': 'application/json'});
                response.end(JSON.stringify(rows));
                response.end();
        });

}).listen(8084);

//Just an FYI on query parameters
//WHERE id IN (?,?)',[1, 7]

/*var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\nI love you!');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');*/