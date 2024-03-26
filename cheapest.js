// kono object er man onujai tar kom dam o beshi dam nirdharon kora . R eta songkhar khetreo hote pare abar object er jonno hote pare
// tobe object er jonno ekto alada seta holo object er vitorer kono ekta variable ke nirdharon kore dite hobe ja protitar jonno alada alada hoy...

// 1. songkhar kon  nirnoy kora..

const price = [50,40,10,100,32,80,694,20,40,];

function getMin (numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        } 
    }
    return min;
    
}
const dam = getMin(price);
console.log(' Shob cheye kom dam : ', dam);




// 2. songkhar kon  nirnoy kora..
// 2. songkhar kon  nirnoy kora..
// 2. songkhar kon  nirnoy kora..



function getMax (numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        } 
    }
    return max;
    
}
const mullo = getMax(price);
console.log(' Shob cheye Beshi dam : ', mullo);
