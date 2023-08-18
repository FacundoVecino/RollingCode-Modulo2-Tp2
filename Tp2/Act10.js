/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let filasUsuario = parseInt(prompt("Ingresa el número de filas de la tabla:"));
let columnasUsuario = parseInt(prompt("Ingresa el número de columnas de la tabla:"));

if (!isNaN(filasUsuario) && !isNaN(columnasUsuario)) {
    let numero = filasUsuario * columnasUsuario;

    for (let i = 0; i < filasUsuario; i++) {
      let fila = '';
      for (let j = 0; j < columnasUsuario; j++) {
        fila += numero + "\t";
        numero--;
      }
      console.log(fila);
    }
} else {
  console.log("Debes ingresar números válidos.");
}

/* HOLA EZE */