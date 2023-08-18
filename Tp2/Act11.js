/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() */

let edad1 = parseInt(prompt("Ingresa la edad de la primera persona:"));
  let edad2 = parseInt(prompt("Ingresa la edad de la segunda persona:"));
  let edad3 = parseInt(prompt("Ingresa la edad de la tercera persona:"));

  let nombre1 = prompt("Ingresa el nombre de la primera persona:");
  let nombre2 = prompt("Ingresa el nombre de la segunda persona:");
  let nombre3 = prompt("Ingresa el nombre de la tercera persona:");

  let mayorEdad = Math.max(edad1, edad2, edad3);

  if (mayorEdad === edad1) {
    console.log(`La persona más grande es ${nombre1}`);
  } else if (mayorEdad === edad2) {
    console.log(`La persona más grande es ${nombre2}`);
  } else {
    console.log(`La persona más grande es ${nombre3}`);
  }

  /* HOLA EZE */