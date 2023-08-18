/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’
 */


while (true) {
    let letraDNI = "TRWAGMYFPDXBNJZSQVHLCKET"
    let input = prompt("Ingrese un numero de DNI o pulse 'Cancelar' para detener el ciclo");
    if (input === null || input === ''){
        break;
    } else {
        let DNI = parseInt(input)
        if (isNaN(DNI) || DNI < 10000000 || DNI > 99999999){
            alert("Error, ingrese un numero valido de 8 cifras");
        } else {
            let resto = DNI % 23;
            letraDNI = letraDNI.charAt(resto);
            alert("La letra del DNI es: " + letraDNI);
        }
        
    }
}

/* HOLA EZE */