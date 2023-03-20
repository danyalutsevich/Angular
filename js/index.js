import fetch from 'node-fetch'
import fs from 'fs'
import os from 'os'
import mysql from 'mysql'
import dotenv from 'dotenv'
import express from 'express'

const URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`
dotenv.config()

async function getExchangeRates() {
    const response = await fetch(URL)
    return await response.json()
}

const saveJsonToFile = (data, filename) => {
    fs.writeFile(filename, JSON.stringify(data), (err) => { })
}

(async () => {
    const data = await getExchangeRates()
    saveJsonToFile(data, "exchange.json")
})()

let pcInfo = {
    "platform": os.platform(),
    "arch": os.arch(),
    "cpus": os.cpus(),
    "totalmem": os.totalmem(),
    "freemem": os.freemem(),
    "uptime": os.uptime(),
    "hostname": os.hostname(),
    "userInfo": os.userInfo(),
    "type": os.type(),
    "release": os.release(),
    "loadavg": os.loadavg(),
    "endianness": os.endianness(),
    "homedir": os.homedir(),
    "tmpdir": os.tmpdir(),
}

saveJsonToFile(pcInfo, 'pcInfo.json')

const connection = mysql.createConnection(process.env.DATABASE_URL)

function connectToDb(){
    connection.connect()
    console.log('Connected to database')
}

function disconnectToDb(){
    connection.destroy()
    console.log('Disconnected from database')
}

connectToDb()
disconnectToDb()

const app = express()

app.get('/main', (req, res) => {
    res.send('main')
})

app.listen(8888)
