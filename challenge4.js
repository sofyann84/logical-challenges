function indexPrime(n) {
    var index = 0; // 1
    var count = 2; // 3
    while (index < n) {
        var prima = true;
        //for (var a = 2; a < count; a++) {
            for (var a = 2; a <= Math.sqrt(count); a++) {
            if (count % a === 0) {
                prima = false;
            }
        }
        if (prima) {
            index++;
        }
        count++;
    }
    return count-1;
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
