const countRules = [
    {
        divisible: 3,
        message: 'Visual'
    },
    {
        divisible: 5,
        message: 'Nuts'
    }
];


function applyCountRules(number) {

    if (countRules.every(countRule => number % countRule.divisible === 0)) { // check if number is disible by all count rules divisibles
        return console.log('Visual Nuts');
    }

    if (countRules.some(countRule => number % countRule.divisible === 0)) {  // check if number is disible by at least one count rule divisible
        return console.log(countRules.find(countRule => (number % countRule.divisible === 0)).message);
    }

    console.log(number)
} 

function count(max = 100) {
    new Array(max).fill(null).map((element, index) => applyCountRules(index + 1));
}

module.exports = { count };

