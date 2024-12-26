const persona = {
    nombre: 'Javier',
    apellido: 'Mejia',
    edad: 23,
    direccion: {
        ciudad: 'León',
        zip: 111321,
        lat: 14.3232,
        lng: 34.923332
    }
};

const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log({ persona: persona2 });
console.log({ persona: persona });
