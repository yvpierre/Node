// let express = require('express')
// let app = express()

// Ou en une ligne
let app = require('express')()

app.get('/', (request, response) => {
    response.send('À la racine')
})

app.get('/demo', (request, response) => {
    response.send('Sur la démo')
})

app.listen(8080)