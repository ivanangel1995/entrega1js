//punto 1

function determinarParidad(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par");
    } else {
        console.log(numero + " es un número impar");
    }
}

// Ejemplos de uso:
determinarParidad(4);
determinarParidad(7);
determinarParidad(10);

//punto 2

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log("Ambos números son iguales");
    }
}

// Ejemplos de uso:
compararNumeros(5, 10);
compararNumeros(20, 5);
compararNumeros(7, 7);

//punto 3

function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " es múltiplo de 5");
    } else {
        console.log(numero + " no es múltiplo de 5");
    }
}

// Ejemplos de uso:
esMultiploDeCinco(10);
esMultiploDeCinco(7);
esMultiploDeCinco(15);

//punto 4

function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

// Ejemplo de uso:
imprimirNumerosHasta(5);

//punto 5

function imprimirPalabraRepetida(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

// Ejemplo de uso:
imprimirPalabraRepetida("Hola", 3);

//punto 6

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Ejemplo de uso:
const miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray);

// punto 7

function imprimirArrayExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { // El quinto elemento tiene índice 4 (recordando que el índice comienza en 0)
            console.log(array[i]);
        }
    }
}

// Ejemplo de uso:
const miArray7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArrayExceptoQuinto(miArray7);

// punto 8 

function multiplicarArrayPorNumero(array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * multiplicador);
    }
}

// Ejemplo de uso:
const miArray8 = [1, 2, 3, 4, 5];
multiplicarArrayPorNumero(miArray8, 3);