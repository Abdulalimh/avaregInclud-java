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




// 3.  kono object er dam onujai kom beshi nirdharon korar program ......

const mobiles = [ 
    {mobile : 'Sumsung',price: 50000,camera:'12mp', Color: 'black'},
    {mobile : 'Nokia',price: 28000,camera: '12mp', Color: 'black'},
    {mobile : 'Iphone',price: 120000,camera: '12mp', Color: 'black'},
    {mobile : 'Realme',price: 30000,camera: '12mp', Color: 'black'},
    {mobile : 'Xomi',price: 39000,camera: '12mp', Color: 'black'},
    {mobile : 'Oppo',price: 40000,camera: '12mp', Color: 'black'}
]

function getMinPricePhone (phones){
    let min = phones[0];
    for(const phone of phones ){
        if(min.price > phone.price){
            min = phone;
        }
    }
    return min ;
    
}
const lowPrice = getMinPricePhone(mobiles);
console.log('low Price phone in my Shop :', lowPrice);
