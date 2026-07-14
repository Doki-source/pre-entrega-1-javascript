const nombre = prompt("Ingrese su nombre:");
const anioNacimiento = Number(prompt("Ingrese su año de nacimiento:"));
const anioActual = Number(prompt("Ingrese el año actual:"));

const edadAproximada = anioActual - anioNacimiento;

alert("Hola " + nombre + ", tu edad aproximada es: " + edadAproximada + " años.");