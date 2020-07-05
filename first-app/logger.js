const EventsEmitter = require('events'); //class 

class Logger extends EventsEmitter {
	log(message)
	{
		console.log(message)
		this.emit('messageLogged', { id: 1, url: 'https://'});
	}
}

module.exports = Logger;