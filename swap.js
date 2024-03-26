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



const heights =[50,89,90,45,75,30,60,2,2,] 

function f(array,value){
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    return n;
}
const max =f(heights)
console.log('big number is :' ,max)











const numbers = [5,2,1,5,3,2,3,45,50,40,40,80,50]

function dupliCate (array){

    const unique = [];
    for (const item of array){
        if(unique.includes(item)=== false){
            unique.push(item);

        }
    }
    return unique;
}
const uniqueArray = dupliCate(numbers);
console.log('doplicate number is : ',uniqueArray);













const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

const counts = [];
arr.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);














// Our array of values
const myArray = [1, 2, 3, 2, 4, 5 ];

// The magical counting process
const countDuplicates = (arr) => {
  // Let's use a JavaScript object to keep track of counts
  const counts = {};

  // Loop through each element in the array
  arr.forEach((value) => {
    // If the value is encountered for the first time, set the count to 1
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      // If the value has been seen before, increment the count
      counts[value]++;
    }
  });

  // Voilà! The counts object now holds the frequency of each value
  return counts;
};

// Let's see the result
const result = countDuplicates(myArray);
console.log(result);