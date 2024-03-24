// Convert korte hobe

function heightWegth (inch){

    const feet = inch/ 12 ;
    const feetNumber = parseInt(feet);
    const feetRimaning = inch % 12 ;
    const result = feetNumber + ' ft. ' + feetRimaning + ' inch.';
    return result;
}

function mailToKilo (mile){
 const kilo = mile * 1.60934 ;
 const kiloNumber = parseInt(kilo);
 const meter = mile % 1.60934 ;

 const metersize = meter * 1000 ;
 const meterNumber = parseInt(metersize);
 const meters = meter % 1000 ;

 const milisize = meter * 1000000 ;
 const miliNumber = parseInt(milisize);
 const mili = meters % 1000000 ;
 const result = kiloNumber + ' Km ' + meterNumber + ' Meter ' + miliNumber + ' mm ' + mili ;
 return result ;

}


 const toDay = new Date( '2024/11/13');
 


const myHeight = heightWegth(75);
const miles = mailToKilo(48);
console.log(myHeight);
console.log(miles);
console.log(toDay.toLocaleString('en-GB'));
