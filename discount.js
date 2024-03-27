// jodi kono kisur discount thake tahole seta kivabe ber korbo tar program..
// discount dui procar 1. sob maler upor .  2. nirdharito songkhar porer songkha gulote discount...

// 1 no. discount=====================================

const frist100 = 100;
const secound100 = 90;
const above200 = 70;

function discount (quantity){
    if(quantity <= 100){
        const total = quantity * frist100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * secound100;
        return total;
    }
    else{
        const total = quantity * above200;
        return total;
    }
    
}
const totalDiscount = discount(20);
console.log('Apnar total discount : ',totalDiscount + ' Tk.');




//  2. leareDiscount   ///////////////////////////////

const frist100Price = 100;
const secound100Price = 90;
const above200Price = 70;

function leareDiscount(quantity){

    if (quantity <= 100){
        const total = quantity * frist100Price ;
        return total;
    }
    else if(quantity <= 200){
        const frist100Total = 100 * frist100Price;
        const discountOn = quantity -100;
        const totalDiscount = discountOn * secound100Price;
        const total = frist100Total + totalDiscount;
        return total;
     
    }
    else{
        const frist100Total = 100 * frist100Price;
        const discountOn = 100 * secound100Price;
        const secoundDiscountOn = quantity - 200;
        const secoundDiscount = secoundDiscountOn * above200Price;
        const total = frist100Total + discountOn + secoundDiscount;
        return total;
    }
}

const leareOffer = leareDiscount(201);
console.log('Apnar Mot Discount : ',leareOffer + ' Tk. ');