//const log = require('./logger') //unique to node don't have in browsers

//console.log(log);
//log('message')

//const path = require('path');

//var pathObj = path.parse(__filename);

//console.log(pathObj);

//const os = require('os');

//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();

//console.log('Total Memory : ' + totalMemory);

//Tempalte string
// ES6 / ES2015: ECMAScript 6

//console.log(`Total Memory: ${totalMemory}`)
//console.log(`Free Memory: ${freeMemory}`)

//const files = fs.readdirSync('./');
//console.log(files);

//fs.readdir('./', function(err, files){
	//if (err) console.log('Error', err);
	//else console.log('Result', files);
//});

const fs = require('fs');


const EventsEmitter = require('events'); //class 

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => { // e, eventArg
	console.log('Listener called', arg);
});

logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/'){
		res.write('Hello World');
		res.end();
	}
	
	if (req.url === '/api/courses'){
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
});

server.on('connection', (socket) => {
	console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');



