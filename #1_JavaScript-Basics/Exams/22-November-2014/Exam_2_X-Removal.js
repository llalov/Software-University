function solve(arr) {
    var inputMatrix = [];
    var outputMatrix = [];

    for (var i = 0; i < arr.length; i++) {
        inputMatrix.push(arr[i].toLowerCase().split(''));
        outputMatrix.push(arr[i].split(''));
    }

    for (var row = 2; row < inputMatrix.length; row++) {
        for (var col = 2; col < inputMatrix[row].length; col++) {
            var char = inputMatrix[row][col];

            if (char === inputMatrix[row][col - 2] &&
                char === inputMatrix[row - 1][col - 1] &&
                char === inputMatrix[row - 2][col] &&
                char === inputMatrix[row - 2][col - 2]) {
                outputMatrix[row][col] = ' ';
                outputMatrix[row][col - 2] = ' ';
                outputMatrix[row - 1][col - 1] = ' ';
                outputMatrix[row - 2][col] = ' ';
                outputMatrix[row - 2][col - 2] = ' ';
            }

        }

    }

    var finishedMatrix = [];

    outputMatrix.forEach(function (row) {
        finishedMatrix.push(row.join('').split(" ").join(''));
    });

    finishedMatrix.forEach(function (row) {
        console.log(row);
    })

}

solve(['8888888', '08*8*80', '808*888', '0**8*8?']);
