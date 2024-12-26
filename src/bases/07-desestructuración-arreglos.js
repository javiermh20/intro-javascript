const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => ['ABC', 123];

const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre

const retornaArreglo2 = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const arr = retornaArreglo2('Goku');
const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();
