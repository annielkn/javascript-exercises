const palindromes = function (s) {
    let isAlnum = str => /^[a-zA-Z0-9]$/.test(str);
    
    let l = 0, r = s.length - 1;

    while (l < r){
        if (!isAlnum(s[l])) {
            l += 1;
            continue;
        }
        if (!isAlnum(s[r])) {
            r -= 1;
            continue;
        }
        if (s[l].toLowerCase() != s[r].toLowerCase()){
            return false;
        }
        l++;
        r--;
    }
    
    return true;

};

// Do not edit below this line
module.exports = palindromes;
