const sumAll = function(a, b) {
    const triangle = n => n*(n+1)/2;
    if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0){
        return triangle(Math.max(a,b))-triangle(Math.min(a,b)-1); 
    }
    return `ERROR`;
};

// Do not edit below this line
module.exports = sumAll;
