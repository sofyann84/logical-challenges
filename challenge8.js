function pola(str) {
    split1 = str.split("=");
    // console.log(split1);
    angka3 = split1[1].trim();
    split2 = split1[0].split("*");
    angka1 = split2[0].trim();
    angka2 = split2[1].trim();
    // console.log(angka1, angka2, angka3);


    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if(angka1.replace("#", i) * angka2 == angka3.replace("#", j)){
                return [i, j];
                 // console.log(m,n); // ini penulisan untuk console log 
            }
        }
    }
}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));