// kono jinish k ekta array theke kivab khuje ber korbo tar program
// kono jinish k ekta array theke kivab khuje ber korbo tar program
// kono jinish k ekta array theke kivab khuje ber korbo tar program


const products = [
    {id: 1, name :'nokia phone', price: 20000},
    {id: 2, name :'Iphone', price: 20000},
    {id: 3, name :'Samsung phone', price: 20000},
    {id: 4, name :'Mac book laptop', price: 20000},
    {id: 5, name :'Dell laptop', price: 20000},
    {id: 6, name :'lenovo Laptop', price: 20000},
    {id: 7, name :'one plus phone', price: 20000},
    {id: 8, name :'htc Phone', price: 20000},
    {id: 9, name :'Hp laptop', price: 20000},
    {id: 10, name :'xiami Phone', price: 20000},
];

function productsSide ( products, search){
    const matched = [];
    for( const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
    
}

const result = productsSide(products,'dell');
console.log(result);