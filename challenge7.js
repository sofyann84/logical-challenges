function weirdMultiply(sentence){
    let sentenceString = sentence.toString();
    if (sentenceString.length == 1)
        return sentence;
    let total = 1;
    for (var i = 0; i < sentenceString.length; i++){
        total = total * sentenceString[i]
    }
    return weirdMultiply(total)
}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));