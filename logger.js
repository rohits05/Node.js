// (function (exports, require, module, __filename, __dirname) { // Module wrapping function


const EventEmitter = require('events') // Loading Event Module - Node JS __< with event emiiter class >
// const { emitWarning } = require('process')

// const emitter = new EventEmitter()

    console.log(__filename) // gives current filename
    console.log(__dirname) // gives current directory name
    // var x =;
    var url = 'http://mylogger.io/log';

    class Logger extends EventEmitter{

         log(message) {
            // Send an HTTP request
            console.log(message);
    
            // Raise an Event
            emitter.emit('messageLogged')  // This emit method iterates over all the registered listeners and calls them synchronously
            this.emit('messageLogged' , 1 , 'url') 
            this.emit('messageLogged' , { id: 1 , url: 'http://'} ) 
         }
    }
    

module.exports = Logger;

// })