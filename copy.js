let fs = require('fs')



function lireStream(path, name) {
    fs.stat(path, (err,stat) => {
        if (err) throw err
        let read = fs.createReadStream(path)
        let write = fs.createWriteStream(name)

        let total = stat.size
        let progress = 0

        read.on('data', (chunk) => {
            progress += chunk.length
            console.log("J'ai lu : "+ Math.round(100 * progress / total) + "%")
        })

        read.pipe(write)

        write.on('finish', () => {
            console.log('fichié copié')
        })
    })
}

lireStream('goodfellas.jpeg', 'copy.jpeg')


/* Longer way to do it as you have to wait till
the file is completely read to write in the new file
function copier(path, name) {
    fs.readFile(path, (err, data) => {
        if (err) throw err
        fs.writeFile(name, data, (err) => {
            if(err) throw err
            console.log('tout est ok')
        })
    })
}
*/

