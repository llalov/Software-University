function solve(arr) {

    var deg = Number(arr[0].replace(/\D/g, ''));
    var degrees = deg % 360;
    var matrix = '';

    //define the max row length
    var rowLength = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > rowLength) {
            rowLength = arr[i].length;
        }
    }

    //make all arr[i] with equal length by adding whitespace.
    for (var i = 1; i < arr.length; i++) {
        while (arr[i].length < rowLength) {
            arr[i] += ' ';
        }
    }

    //rotation is 90 degrees
    if (degrees === 90) {
        for (var i = 0; i < rowLength; i++) {
            for (var j = arr.length - 1; j > 0; j--) {
                matrix += arr[j][i];
            }
            if (i != rowLength - 1) {
                matrix += '\n';
            }
        }
        console.log(matrix);
    }

    //rotation is 180 degrees
    if (degrees === 180) {
        for (var i = 1; i < arr.length; i++) {
            arr[i] = arr[i].split('').reverse().join('');
        }
        for (var i = arr.length - 1; i > 0; i--) {
            matrix += arr[i];
            if (i != 1) {
                matrix += '\n';
            }
        }
        console.log(matrix);
    }

    //rotation is 270
    if (degrees === 270) {
        for (var i = rowLength - 1; i >= 0; i--) {
            for (var j = 1; j < arr.length; j++) {
                matrix += arr[j][i];
            }
            if (i != 0) {
                matrix += '\n';
            }
        }
        console.log(matrix);
    }

    //rotation is 360
    if (degrees === 0) {
        for (var i = 1; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }

}
solve(['Rotate(90)', 'hello', 'softuni', 'exam']);
