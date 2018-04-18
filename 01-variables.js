console.log("Hola Mundoo!");
var nombre = "Mayra";
var edad = sumaDosNumeros(10,12);
var fun = sumaDosNumeros;
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
    edad: 22,
    imprimirEnConsola : sumaDosNumeros
};
usuario.imprimirEnConsola(1,2);
console.log(usuario);
/*delete usuario.apellido;
usuario.cedula = '1003308960';
usuario.mascotas = {};
usuario.mascotas.nombre = 'Aicha';
console.log(usuario);*/

/*console.log(typeof nombre); //string
console.log(typeof edad); //number
console.log(typeof deudas); //number
console.log(typeof vacia); //object
console.log(typeof noDefindo); //undefined*/

console.log(fun(3,1));

function sumaDosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
//console.log(sumaDosNumeros(1,2));

var sumaDosNumerosVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};