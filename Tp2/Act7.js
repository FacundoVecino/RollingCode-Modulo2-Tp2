/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let numeroUsuario = parseInt(prompt("Ingrese el numero maximo a imprimir (NO MAS DE 50)"));
if (!isNaN(numeroUsuario)){
    if (numeroUsuario > 50) {
        console.log("El número no puede ser mayor que 50.");
      } else{
        for (let i = numeroUsuario; i >= 1; i--) {
        let linea = '';
        for (let j = 0; j < i; j++) {
          linea += i;
        }
        console.log(linea);
      }
      }
} else{
    console.log("Debe ingresar un numero valido");
}

/* HOLA EZE */