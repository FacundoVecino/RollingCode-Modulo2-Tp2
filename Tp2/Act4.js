/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let sumTotal = 0;
while (true){
    let num = prompt("Ingrese un numero o pulse 'cancelar' para detener el ciclo");
    if (num === null || num === ""){
        break;
    }

    num = parseInt(num);
    if (!isNaN(num)){
        sumTotal += num;
    } else{
        alert("Error, Ingrese un numero valido");
    }
}

alert("La suma total de los numeros introducidos es " + sumTotal);

/* HOLA EZE */