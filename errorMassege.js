// User jodi input type vul dey tokhon user ke error massege dekhabe r ki likhte hobe tabole dibe 
// R kivabe object R array chek korte hoy tar programing..................



function fulName ( frist ,  last ){
    if(typeof frist !== 'string'){
        return' Please Type your frist Name ';
    }
    else if(typeof last !== 'string'){
        return' Please Type your Last Name '
    }
    const full = frist + ' ' + last;
    return full;
}

const full = fulName('Alim','Alim');
console.log(full);


