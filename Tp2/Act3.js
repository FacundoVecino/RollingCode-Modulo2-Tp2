/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() */

let totalCadenas = '';

do{
    let cadena = prompt("Ingrese una cadena de texto o presione 'cancelar' para detener la operacion");
    if (cadena != null){
        totalCadenas += cadena + '-';
    }
} while (confirm("¿Desea agregar otra cadena de texto?"));

if (totalCadenas.length > 0){
    totalCadenas = totalCadenas.slice(0, -1);
}

alert("Cadenas concatenadas: " + totalCadenas);

/* HOLA EZE */