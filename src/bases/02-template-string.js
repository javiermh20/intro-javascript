const nombre = 'Javier';
const apellido = 'Mejia';

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola ${nombreCompleto}`;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`); // Hola Mundo