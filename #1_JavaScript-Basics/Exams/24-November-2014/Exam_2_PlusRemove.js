function solve(arr) {
    var inputMatrix = [];
    var extractedMatrix = [];

    for (var i = 0; i < arr.length; i++) {
        inputMatrix.push(arr[i].toLowerCase().split(''));
        extractedMatrix.push(arr[i].split(''));
    }

    for (var row = 0; row < inputMatrix.length - 2; row++) {
        for (var col = 0; col < inputMatrix[row].length - 1; col++) {
            var char = inputMatrix[row][col + 1];
            if (char == inputMatrix[row + 1][col] &&
                char == inputMatrix[row + 1][col + 1] &&
                char == inputMatrix[row + 1][col + 2] &&
                char == inputMatrix[row + 2][col + 1]) {

                extractedMatrix[row][col + 1] = ' ';
                extractedMatrix[row + 1][col] = ' ';
                extractedMatrix[row + 1][col + 1] = ' ';
                extractedMatrix[row + 1][col + 2] = ' ';
                extractedMatrix[row + 2][col + 1] = ' ';
            }

        }

    }

    var finishedMatrix = [];

    extractedMatrix.forEach(function (row) {
        finishedMatrix.push(row.join('').split(" ").join(''));
    });

    finishedMatrix.forEach(function (row) {
        console.log(row);
    })

}
//solve(['ab**l5','bBb*555','absh*5','ttHHH','ttth']);
solve(['@s@a@p@una', 'p@@@@@@@@dna', '@6@t@*@*ego', 'vdig*****ne6', 'li??^*^*']);
