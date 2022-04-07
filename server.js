let _ = require('lodash')
// On multiplie tous les chiffres par 3
console.log(_.map([1, 2, 3], function(n) { return n * 3; }))

// Si on veut charger uniquement map par exemple,
// On peut faire :
// let map = require('lodash/map')

let app = require('./app').start(8080)

app.on('root', function(response) {
    response.write('Je suis à la racine')
})

