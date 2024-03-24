// Convert korte hobe

function heightWegth (inch){

    const feet = inch/ 12 ;
    const feetNumber = parseInt(feet);
    const feetRimaning = inch % 12 ;
    const result = feetNumber + ' ft. ' + feetRimaning + ' inch.';
    return result;
}
const myHeight = heightWegth(75);
console.log(myHeight);