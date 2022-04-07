/*
Export avec une variable
let hello = function () {
    console.log('hello')
}

Si on veut exporter une seule variable/fonction
module.export = {
    hello: hello
}
*/

// Export direct d'une fonction
// Syntaxe exports.[function/var] pour plusieurs exports
exports.hello = function () {
    console.log('hi')
}
exports.bye = function () {
    console.log('bye')
}


