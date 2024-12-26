// funciones 
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Javier'));
console.log(saludar2('Javier'));
console.log(saludar3('Javier'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Javier');
console.log(usuarioActivo);