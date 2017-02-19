function solve(arr) {

    var matches = {
        I: 0,
        L: 0,
        J: 0,
        O: 0,
        Z: 0,
        S: 0,
        T: 0
    };

    //check for L.
    if (arr.length >= 3 && arr[0].length >= 2) {
        for (var row = 2; row < arr.length; row++) {
            for (var col = 1; col < arr[0].length; col++) {
                if ((arr[row][col - 1] == 'o') && (arr[row - 1][col - 1] == 'o') && (arr[row - 2][col - 1] == 'o') && (arr[row][col] == 'o')) {
                    matches.L += 1;
                }
            }
        }
    }

    //check for I.
    if (arr.length >= 4) {
        for (var row = 3; row < arr.length; row++) {
            for (var col = 0; col < arr[0].length; col++) {
                if ((arr[row][col] == 'o') && (arr[row - 1][col] == 'o') && (arr[row - 2][col] == 'o') && (arr[row - 3][col] == 'o')) {
                    matches.I += 1;
                }
            }
        }
    }

    //check for Z
    if (arr.length >= 2 && arr[0].length >= 3) {
        for (var row = 1; row < arr.length; row++) {
            for (var col = 2; col < arr[0].length; col++) {
                if ((arr[row][col] == 'o') && (arr[row][col - 1] == 'o') && (arr[row - 1][col - 1] == 'o') && (arr[row - 1][col - 2] == 'o')) {
                    matches.Z += 1;
                }
            }
        }
    }

    //check for J
    if (arr.length >= 3 && arr[0].length >= 2) {
        for (var row = 2; row < arr.length; row++) {
            for (var col = 1; col < arr[0].length; col++) {
                if ((arr[row][col] == 'o') && (arr[row][col - 1] == 'o') && (arr[row - 1][col] == 'o') && (arr[row - 2][col] == 'o')) {
                    matches.J += 1;
                }
            }
        }
    }

    //check for S
    if (arr.length >= 2 && arr[0].length >= 3) {
        for (var row = 1; row < arr.length; row++) {
            for (var col = 2; col < arr[0].length; col++) {
                if ((arr[row][col - 1] == 'o') && (arr[row][col - 2] == 'o') && (arr[row - 1][col] == 'o') && (arr[row - 1][col - 1] == 'o')) {
                    matches.S += 1;
                }
            }
        }
    }

    //check for O
    if (arr.length >= 2 && arr[0].length >= 2) {
        for (var row = 1; row < arr.length; row++) {
            for (var col = 1; col < arr[0].length; col++) {
                if ((arr[row][col] == 'o') && (arr[row][col - 1] == 'o') && (arr[row - 1][col] == 'o') && (arr[row - 1][col - 1] == 'o')) {
                    matches.O += 1;
                }
            }
        }
    }

    //check for T
    if (arr.length >= 2 && arr[0].length >= 3) {
        for (var row = 1; row < arr.length; row++) {
            for (var col = 2; col < arr[0].length; col++) {
                if ((arr[row][col - 1] == 'o') && (arr[row - 1][col] == 'o') && (arr[row - 1][col - 1] == 'o') && (arr[row - 1][col - 2] == 'o')) {
                    matches.T += 1;
                }
            }
        }
    }

    console.log(JSON.stringify(matches));
}
solve(['--o--o-', '--oo-oo', 'ooo-oo-', '-ooooo-', '---oo--']);
