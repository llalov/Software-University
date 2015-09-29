function solve(arr) {

    var stars = {};

    for (var i = 0; i < arr.length - 2; i++) {

        var tokens = arr[i].split(' ');
        var starName = tokens[0];
        var pointX = Number(tokens[1]);
        var pointY = Number(tokens[2]);

        stars[starName] = {x: pointX, y: pointY};
    }

    var tokens2 = arr[3].split(' ');
    var meX = Number(tokens2[0]);
    var meY = Number(tokens2[1]);
    var moves = Number(arr[4]);

    for (var j = 0; j <= moves; j++) {
        var inside = false;
        for (var i in stars) {
            if (((meX >= stars[i].x - 1) && (meX <= stars[i].x + 1)) && ((meY >= stars[i].y - 1) && (meY <= stars[i].y + 1))) {
                console.log(i.toLowerCase());
                inside = true;
            }
        }
        if (inside === false) {
            console.log('space');
        }
        meY += 1;
    }
}

solve(['Sirius 3 7', 'Alpha-Centauri 7 5', 'Gamma-Cygni 10 10', '8 1', '6']);
