import fs from 'fs'
import events from "events"

fs.readFile('index.js', 'utf8', (err, data) => {
    console.log(data)
})

const eventEmitter = new events.EventEmitter()

eventEmitter.addListener('show', (data) => {
    console.log('Show ', data)
})

eventEmitter.addListener('hide', (data) => {
    console.log('Hide ', data)
})

eventEmitter.emit('show')

