// avareg counting
function oddsNumber(numbers){
    const odds =[];
    for(const number of numbers){
        if(number % 2===1){
           odds.push(number);
        }
    }
    let sum =0;
    for( const number of odds){
         sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
    
}

function eventNumber(numbers){
    const event = [];
    for(const number of numbers){
        if( number % 2===0){
            event.push(number) ;
        } 
    }
    let sum =0;
    for( const number of event){
        sum = sum + number;
    }
    const result = sum / event.length;
    return result; 
    
}



function totalNumber(numbers){
    let sum = 0;
    for( const number of numbers){
        sum = sum + number;
    }
    const count = numbers.length;
    const avg3 = sum/ count;
    return avg3 ;      
}


const numbers =[20,100,45,60,81,65,30,90,99,80,20,99,99,100,50]
const avg =oddsNumber(numbers);
const avg2 = eventNumber(numbers);
const avg3 = totalNumber(numbers);
console.log( 'Your odds Avareg number is :', avg);
console.log('Your events Avareg numbers is : ' ,avg2);
console.log( 'Your total Avareg number is :',avg3);
