// ekta calculator code kora ....


function add (num1,num2){
    const sum = num1 + num2 ;
    return sum;
}

function subTract (num1,num2){
    const sum = num1 - num2 ;
    return sum;
}

function maltiply (num1,num2){
    const sum = num1 * num2 ;
    return sum;
}

function divide (num1,num2){
    const sum = num1 / num2 ;
    return sum;
}


function calculator ( a,d,oparetion){
    if ( oparetion === 'add'){
        const sum = add(a,d) ;
        const result = sum;
        return result ;
    }

    else if ( oparetion === 'subTract'){
        const sum = subTract(a,d) ;
        const result = sum;
        return result ;
    }

    else if ( oparetion === 'maltiply'){
        const sum = maltiply(a,d) ;
        const result = sum;
        return result ;
    }

    else if ( oparetion === 'divide'){
        const sum = divide (a,d) ;
        const result = sum;
        return result ;
    }
    else {
        return " Only 'add','subTract',maltiply','divide' Oparetion is Allowed... "
    }

}
const calculate = calculator(30,6 ,'maltiply');
console.log('Yore calculate is : ',calculate);