console.log("===Comprobación exitosa, output de consola satisfactorio===");
/*
//tipos de datos
const numero= 42; //Numero
const texto="Hola"; //Texto
const esVerdadero= true; //Booleano
let sinValor= undefined; //Indefinido, existe pero no tiene un valor asignado
const vacioIntencional= null; //Null sin valor
const string= "que tal";

//Datos compuestos con arreglos
const arreglo= [1, 2, 3, 4, 5];
const objeto= {fe: 2, o: 3};
const libro= [
    {portada: "inicio de aventura", elemento: "Cap1"},
];

//Tipado Dinámico
let dato= 5; //ahora es Numer   
dato = "cinco"; // y STRING

//Operadores
const tiempoSegundo = 5;
const intento= 1;

if (tiempoSegundo <= 10 || intento === 1) {
    //mensaje especial
    if (condicion) {
        //se ejecuta si la condición es True
    } else if (otracondicion) {
        //se ejecuta si la primera fue false, pero esta es True
    } else {
        //se ejecuta si ninguna de las anterirores fue True
    }
}
//Switch   
const tipoReaccion= "sintesis";
let mensaje= ""
switch (tipoReaccion) {
    case "sintesis":
        mensaje= "Dos o más susntacias que se combinan en una sola.";
        break;
    case "descomposicion":
        mensaje= "Una sustancia se divide en dos o más"
        break;
    case "combustion":
        mensaje= "Reacción con oxígeno que libera energía"
        break;
    case "desplazamiento":
        mensaje= "Un grupo de átomos en un compuesto es reemplazado por otro, pueden ser simples o dobles"
        break;
    default:
        mensaje= "Tipo de reacción no reconocido.";
}

//Bucles
//Bucle for clásico

for (inicialización; condición; actualización) {
    //codigo a repetir
}
*/
//Ejemplo bucle for

for (let i = 0; i < 5; i ++ ) {
    console.log("El número es: " + i);

}
// Bucle while

let contador = 0;
while (contador < 5) {
    console.log("contador; " + contador);
    contador++; //IMPORTANTE si olvidas esto el bucle es infinito.
}
//Bucle do while

let numero = 10;
do {
    console.log("se ejecuta al menos una vez");
    numero++;
} 
while (numero < 5);

//Bucle con array

const frutas = ["manzana", "Pera", "Uva", "Fresa"];
for (const fruta of frutas) {
    console.log(fruta);
}
//Bucle for in

const furry = {
    nombre: "Kim Hotoke", edad: "21", ciudad: "Guatemala"
};

for (const clave in furry) {
    console.log(clave + ": " + furry[clave]);
}
//Bucle .forEach

const numeros = [10, 20, 30, 40];

numeros.forEach(function(numero) {
    console.log(numero * 2);
})
//Bucles break y continue
 
for (let i = 0; i < 10; i ++) {
    if (i === 5) break // cuando llegue a cinco se detiene
    console.log(i);
}
//Bucle continue

for (let i = 0; i < 5; i++) {
    if (i === 2) continue; //Se salta el 2
    console.log(i);
}
//Bucle anidados

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
    console.log(`Fila ${i}, Columna ${j}`);
    }
}
//Ejemplo practico

for (let i = 1; i < 6; i++) {
    console.log(`Ejercicio ${i}`);
}

