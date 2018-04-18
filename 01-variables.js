console.log("Hola Mundoo!");
var nombre = "Mayra";
var edad = 22;
var deudas = 234.54;
var fecha = new Date();
var casado = false;
var vacia = null;
var noDefindo = undefined;

/*console.log(vacia ? "Verdadero" : "Falso");  //Falso
console.log(noDefindo ? "Verdadero" : "Falso"); //Falso
console.log(0 ? "Verdadero" : "Falso"); //Falso
console.log(1 ? "Verdadero" : "Falso"); //Verdadero
console.log(-1 ? "Verdadero" : "Falso"); //Verdadero*/

//Json
var usuario = {
    "nombre": "Mayra",
    apellido: 'Rosero',
    edad: 22
};

console.log(usuario);
delete usuario.apellido;
usuario.cedula = '1003308960';
usuario.mascotas = {};
usuario.mascotas.nombre = 'Aicha';
console.log(usuario);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof deudas);



