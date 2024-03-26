// kivabe ekta jinish ba onek gulo jinisher hishab kora jay tar program
// or kon jinish banate koto tuku jinish lagbe tar hishab.............



function woodQuantity (chair,table , bed , almira) {

    const chairQuantiry  = 4;
    const tableQuantiry  = 8;
    const bedQuantiry    = 60;
    const almiraQuantiry = 70;

    const perChairKath  = chair * chairQuantiry;
    const perTableKath  = table * tableQuantiry;
    const perBedKath    = bed  * bedQuantiry;
    const perAlmiraKath = almira * almiraQuantiry;

    const totalWood = perChairKath + perTableKath + perBedKath + perAlmiraKath ;
    return totalWood ;

}

const kathLagbe = woodQuantity(1,4,8,3);
console.log('Mot kath lagbe :' ,kathLagbe + ' cft .');