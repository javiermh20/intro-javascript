// Desestructuración de objetos
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaUsuario = ({ nombre, edad, rango = 'Capitan', clave }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123,
            lng: -12.323
        }
    };
};

const avenger = retornaUsuario(persona);
const { nombreClave, anios, latlng} = avenger;
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);