function stringManipulation(word) {
    if (word[0] == 'a' || word[0] == 'i' || word[0] == 'u' || word[0] == 'e' || word[0] == 'o') {
        return word
        } else {
        let newWord = word.slice(1) + (word[0]) + ('nyo');
        return newWord;
    }
 }

function sentenceManipulation(sentence){ 
     let kalimat = sentence.split(" ");
     let hasil = [];

     for (let i = 0; i < kalimat.length; i++){
        hasil.push (stringManipulation(kalimat[i]));
     }
     console.log(hasil.join(" "))
}

sentenceManipulation('ibu pergi ke pasar bersama aku');