/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */

let edad = Number(prompt("Ingrese la edad"));
    if (edad >= 0){
        if (edad >= 18){
        alert("Ya puede conducir :D");
    } else {
        alert("La edad ingresada no es un numero valido")
    }
} else {
    alert("La edad ingresada no es un numero valido")
}

/* HOLA EZE */