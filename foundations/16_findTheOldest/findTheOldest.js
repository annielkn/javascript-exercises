const findTheOldest = function(arr) {
    return arr.sort(
        function (a, b) {
            const yr = new Date().getFullYear();
            const agea = (a.yearOfDeath || yr) - a.yearOfBirth
            const ageb = (b.yearOfDeath || yr) - b.yearOfBirth
            return agea > ageb ? -1 : 1;
            }
        )[0];
};

// Do not edit below this line
module.exports = findTheOldest;
