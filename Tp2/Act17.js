/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
 */

let texto = prompt("Ingresa un texto:");
if (texto != null){
    texto = texto.toLowerCase(); 
  let posicionVocal = -1;
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      posicionVocal = i;
      break; 
    }
  }
  if (posicionVocal !== -1) {
    console.log(`La vocal '${texto[posicionVocal]}' está en la posición ${posicionVocal}`); //Bueno no pongo nada, pero me lo explicas en la clase xfi?
  } else {
    console.log("No se encontró ninguna vocal en el texto.");
  }
} else {
    alert("No ha ingresado ningun texto >:c")
}
  
  /* HOLA EZE */