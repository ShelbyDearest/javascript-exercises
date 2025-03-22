const sumAll = function(start, end) {
    let sumAll = 0;

    for (let i = end; i >= start; i--) {
        sumAll += i; } 

        if (isNaN(start) == start || isNaN(end) == end) {
            return 'ERROR'; }

            else if (!Number.isInteger(start) || !Number.isInteger(end)) {
                return 'ERROR'; }

                else if (start < 0 || end < 0 ) {
                    return 'ERROR'; }
    
    return sumAll;
    };
    
    // Do not edit below this line
    module.exports = sumAll;
