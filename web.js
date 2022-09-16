const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat')
const thermostat = new Thermostat()

app.get('/temperature', (req, res) => {
    res.send(`Current temperature: ${JSON.stringify(thermostat.getTemperature())}C`)
})

app.post('/up', (req, res) => {
    thermostat.up()
    res.status(200).send()
})

app.post('/down', (req, res) => {
    thermostat.down()
    res.status(200).send()
})

app.delete('/temperature', (req, res) => {
    res.send(thermostat.reset())
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);