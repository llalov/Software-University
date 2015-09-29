function solve (arr) {

    var positions = arr[0].split(', ');
    var matrix = [];

    for (var i = 1; i < arr.length; i++) {
    matrix.push(arr[i].split(', '));

    }
    var row = 0;
    var col = 0;
    var hitWall = 0;
    var path = '';
    var carrots = 0;
    var cabbage = 0;
    var lettuuce = 0;
    var turnip = 0;

    if (matrix[0][0].indexOf('{!}') != -1) {
        carrots++;
        path += matrix[0][0].replace('{!}','@');
        path +='|';
    }
    if (matrix[0][0].indexOf('{*}') != -1) {
        cabbage++;
        path += matrix[0][0].replace('{*}','@');
        path +='|';
    }
    if (matrix[0][0].indexOf('{&}') != -1) {
        lettuuce++;
        path += matrix[0][0].replace('{&}','@');
        path +='|';
    }
    if (matrix[0][0].indexOf('{#}') != -1) {
        turnip++;
        path += matrix[0][0].replace('{#}','@');
        path +='|';
    }

    for (var i = 1; i < positions.length; i++) {
        if (positions[i] == 'right' && col < matrix[0].length-1 ) {
            col++;
        }
        else if (positions[i] == 'right' && col >= matrix[0].length-1 ) {
            hitWall++;
        }
        else if (positions[i] == 'left' && col > 0 ) {
            col--;
        }
        else if (positions[i] == 'left' && col <= 0 ) {
            hitWall++;
        }
        else if (positions[i] == 'up' && row >= 1 ) {
            row--;
        }
        else if (positions[i] == 'up' && row <= 0 ) {
            hitWall++;
        }
        else if (positions[i] == 'down' && row >= matrix.length-1 ) {
            hitWall++;
        }
        else if (positions[i] == 'down' && row < matrix.length-1) {
            row++;
        }

        if (matrix[row][col].indexOf('{!}') != -1) {
            carrots++;
            path += [row][col].replace('{!}','@');
            path +='|';
        }
        if (matrix[row][col].indexOf('{*}') != -1) {
            cabbage++;
            path += matrix[row][col].replace('{*}','@');
            path +='|';
        }
        if (matrix[row][col].indexOf('{&}') != -1) {
            lettuuce++;
            path += matrix[row][col].replace('{&}','@');
            path +='|';
        }
        if (matrix[row][col].indexOf('{#}') != -1) {
            turnip++;
            path += matrix[row][col].replace('{#}','@');
            path +='|';
        }
    }
    console.log('{"&":'+lettuuce+', "*":'+cabbage+', "#":'+turnip+', "!":'+carrots+', "wall hits":'+hitWall+'}');
    console.log(path);
}
solve(['right, up, up, down','asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj','tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip','poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne']);
