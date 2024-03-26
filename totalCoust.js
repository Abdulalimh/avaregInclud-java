// kono market jokhon kena kata korte jai tokhon onek kisu kine R ete onek taka khoruch hoy ..tar ekta hishab korar program..
// Abar dekha jay ekta jinish koyekta kinte hoy ebong tar dam jog kore total hishab ta ber korar program.....


const products = [
    { name :'Shampo', price: 30},
    { name :'Showp', price: 80},
    { name :'Chirini', price: 50},
    { name :'Lipstic', price: 120},
    { name :'Mekup', price: 500},
    { name :'Ban', price: 40},
    { name :'Nelpolish', price: 90}
]

function getShoppingTotal (products){
    let total= 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
    
}
const totalCoust = getShoppingTotal(products);
console.log('Total market khoros :' ,totalCoust + ' Tk.');




// R jodi konota akadik hoy tahole seta tar price er shathe gun kore pore total er shate jog korte hobe nicher niyom onujai ...



const productss = [
    { name :'Shampo', price: 30,Quality: 5},
    { name :'Showp', price: 80 ,Quality: 2},
    { name :'Chirini', price: 50 ,Quality: 6},
    { name :'Lipstic', price: 120 ,Quality: 3},
    { name :'Mekup', price: 500 ,Quality: 2},
    { name :'Ban', price: 40 ,Quality: 4},
    { name :'Nelpolish', price: 90 ,Quality: 7},
]

function getShoppingTotal (productss){
    let total1= 0;
    for(const product of productss){
        total1 = total1 + product.price * product.Quality;
    }
    return total1;
    
}
const totalCoustProduct = getShoppingTotal(productss);
console.log('Total market khoros :' ,totalCoustProduct + ' Tk.');
