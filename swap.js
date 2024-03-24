// eta dara ekta jinish ke onno jinisher sathe jayga poriborton kore

let a = 5;
let b = 8;

console.log(a,b);

// ekhane je kono ekta manke age alada kore onno ekta temp ba kisu ektar vitore rakhte hobe pore seta k jar man rekhesi tar jaygay bosha te hobe.... 
const  x = a ;
a=b;
b=x;

console.log(a,b);



// My practice //
// My practice //
// My practice //
// My practice //

// The function to convert temperature from Celsius to Fahrenheit.

function temperature (celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
const fahrenheitConvert = temperature(100);
console.log(fahrenheitConvert + ' F');
