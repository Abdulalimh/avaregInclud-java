
// removed duplicate array , duble lekha array theke bad deya...

function noDuplicate (array){
    const unique = [];
    for( const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const briyaniKhor = ['khaled','korim','rashed','khaled','kuddus','korim'];
const arrayNumbers = [22,55,23,20,12,22,55,20];
const uniqueArray = noDuplicate(briyaniKhor);
const uniqueNumbers = noDuplicate(arrayNumbers);
console.log(uniqueArray);
console.log(uniqueNumbers);

