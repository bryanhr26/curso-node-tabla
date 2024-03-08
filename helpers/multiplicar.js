const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( tabla = 5, listar = false, hasta = 10 ) => {

    try{
        let salida = '';
        let consola = '';

        for (let multiplicador = 1; multiplicador <= hasta; multiplicador++) {
            salida += `${ tabla } x ${ multiplicador } = ${ tabla * multiplicador }\n`;
            consola += `${ tabla } ${'x'.green} ${ multiplicador } ${'='.green} ${ tabla * multiplicador }\n`;
        }
        
        if ( listar ){
            console.log('================='.green);
            console.log('   Tabla del:'.green, colors.blue( tabla ) );
            console.log('================='.green);

            console.log(consola);
        }
        
        fs.writeFileSync( `./salida/tabla-${tabla}.txt`, salida);

        return `tabla-${ tabla }.txt`;

    }catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}
