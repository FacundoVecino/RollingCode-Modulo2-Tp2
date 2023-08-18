/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt("Ingresa un texto:");
  let numeroVocales = 0;
  texto = texto.toLowerCase();
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      numeroVocales++;
    }
  }
  console.log(`El número de vocales en el texto es: ${numeroVocales}`);

  /* HOLA EZE */