//Initial value set to a constant.
const kelvin = 293;

//Converting Kelvin to Celsius and storing result into a variable.
let celsius = kelvin - 273;

//Converting Celsius to Fahrenheit and storing result into a variable.
let fahrenheit = celsius * (9/5) + 32;

//Converting Celsius to Newton and storing result into a variable.
let newton = celsius * (33/100);

//Round decimals to the lowest whole integer.
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degree(s) Fahrenheit.`);
console.log(`The temperature is ${newton} newton(s).`);
