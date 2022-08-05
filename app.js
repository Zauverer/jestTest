const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 153.48;
    //return the dollar value
    return valueInYen;
}
 const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen / 0.00625;
    //return the dollar value
    return valueInPound;
}





module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound}
