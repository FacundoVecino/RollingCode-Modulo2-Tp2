/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

let numeroUsuario = parseInt(prompt("Ingrese el numero maximo a imprimir (NO MAS DE 50)"));

if (!isNaN(numeroUsuario)) {
    if (numeroUsuario > 50) {
        console.log("El número no puede ser mayor que 50.");
      } else {
        let linea = '';
      for (let i = 1; i <= numeroUsuario; i++) {
        linea += i;
        console.log(linea);
      }
      }
} else {
  console.log("Debes ingresar un número válido.");
}

/* NO me estoy cansando de esto */