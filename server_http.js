let http = require('http')
let fs = require('fs')
let url = require('url')
const EventEmitter = require('events')

let App = {
    start: function(port) {
        let emitter = new EventEmitter()
        let server = http.createServer((request, response )=> {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            if(request.url === '/'){
                emitter.emit('root', response)
            }

            response.end()

        }).listen(port)

        return emitter
    }
}

let app = App.start(8080)
app.on('root', function(response) {
    response.write('Je suis à la racine')
})

// Creation de serveur
/*
let server = http.createServer()

server.on('request', (request, response) => {

    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name

    fs.readFile('index.html', 'utf8', (error, data) => {

        if (error) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        }
        response.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })

        data = data.replace('{{ name }}', name)

        response.end(data)
    })

})

server.listen('8080')
*/

// Creation d'event
/* const EventEmitter = require('events')

let monEcouteur = new EventEmitter()

monEcouteur.on('saute', function(a, b){
    console.log("J'ai sauté", a, b)
})

monEcouteur.emit('saute', 10, 20) */