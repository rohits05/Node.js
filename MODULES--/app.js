// Using the functionalities of Modules in Node

// Path Module Implementation -------------------------------------------->
const path = require('path')  // Loading Path module - Node JS

var pathObject = path.parse(__filename)
console.log(pathObject)
// _______________________________________________________________________________________________




// OS Module Implementation ---------------------------------------------->
const os = require('os') // Loading OS Module - Node JS

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log(`Total Memory Is: ${totalMemory} `)
console.log('Free Memory Is: ' + freeMemory)
// ______________________________________________________________________________________________




// File System Module Implementation ------------------------------------>
const fs = require('fs') // Loading File System Module - Node JS

const files = fs.readdirSync('./') //Synchronous way to get files access
console.log(files)

fs.readdir('./', function(err, files){ // Asynchronous way to get files access < parameters : error and string array >
    if(err)
    console.log(`Eroor: ${err}`) 

    else
    console.log(`Result: ${files}`)
})
// ______________________________________________________________________________________________





// Event Module Implementation ------------------------------------>
const EventEmitter = require('events') // Loading Event Module - Node JS __< with event emiiter class >
const { emitWarning } = require('process')

// Raise an Event
// emitter.emit('messageLogged')  // This emit method iterates over all the registered listeners and calls them synchronously
// emitter.emit('messageLogged' , 1 , 'url') 
// emitter.emit('messageLogged' , { id: 1 , url: 'http://'} ) 


const Logger = require('../logger')
const logger = new Logger() // Creating the object

// Register a listener
emitter.on('messageLogged',  (arg) => {
    console.log('Listener called !', arg)
})

logger.log('message') // Logging the message
// // ______________________________________________________________________________________________




// HTTP Module Implementation ------------------------------------>
const http = require('http') // Loading HTTP Module - Node JS

const server = http.createServer( (req, res) => { // Better Approach

    if(req.url == '/'){
        res.write('\nHey Rohit, I\'m your Custom Server:\n\n\t\t\t\t Your request has been curiously approved ..!')
        res.end()
    }

    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1 , 2 , 3]))
        res.end()
    }
}) // This server is an event emiiter

// server.on('connection', (socket) =>{
//     console.log('New connection....')
// })  // BASIC WAY OF CREATING HTTP SERVER REQUEST

server.listen(3000)

console.log('Listening on port 3000........')
// ______________________________________________________________________________________________