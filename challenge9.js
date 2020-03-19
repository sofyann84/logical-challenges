function spiral(size) {
    let matriks = [];  //array kosong
    let count = 0;

    for (var i = 0; i < size; i++) {
        matriks[i] = []
        for (var j = 0; j < size; j++) {
            //console.log(matriks);
            matriks[i][j] = count;
            count++;
        }
    }
    //console.log(matriks);

    let x = 0; y = 0;
    let batasAtas = size;
    let batasBawah = 0;

    let result = []
    while (result.length < size * size) {

        for (; x < batasAtas; x++) {
            //console.log(matriks[y][x]);   awalnya seperti ini 
            result.push(matriks[y][x]);
        }
        x--;
        y++;

        for (; y < batasAtas; y++) {
            //console.log(matriks[y][x]);   awalnya seperti ini 
            result.push(matriks[y][x]);
        }
        y--;
        x--;


        for (; x >= batasBawah; x--) {
            //console.log(matriks[y][x]);   awalnya seperti ini 
            result.push(matriks[y][x]);
        }
        x++;
        y--;

        for (; y > batasBawah; y--) {
            //console.log(matriks[y][x]);   awalnya seperti ini 
            result.push(matriks[y][x]);
        }
        x++;
        y++;
        batasAtas--;
        batasBawah++;

    }

    console.log(result);
}
spiral(5);
//spiral(6);
//spiral(7);

