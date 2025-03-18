const removeFromArray = function(firstArray, ...args) {

    const newArray = [];

    firstArray.forEach((items) => {
        if (!args.includes(items)) {
            newArray.push(items); } }); 
        
        return newArray; };

// Do not edit below this line
module.exports = removeFromArray;
