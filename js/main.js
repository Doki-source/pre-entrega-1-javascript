const nombre = prompt("Ingrese su nombre:");
const anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
const anioActual = parseInt(prompt("Ingrese el año actual:"));

const edadAproximada = anioActual - anioNacimiento;

alert("Hola " + nombre + ", tu edad aproximada es: " + edadAproximada + " años.");
