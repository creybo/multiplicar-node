const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar ......');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear .......');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido....');
        break;
}


/*     try {
        let parametro = argv[2];
        if (typeof parametro !== 'undefined') {
            base = parametro.split('=')[1];
        }
    
    } catch (err) {
        console.log('Error Argv', err);
    } */