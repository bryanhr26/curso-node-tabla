const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.t, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );

