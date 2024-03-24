// The function to convert temperature from Celsius to Fahrenheit.

function temperature (celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
const fahrenheitConvert = temperature(2);
console.log(fahrenheitConvert + ' F');