function solve(arr) {

    var map = [];

    for (var i = 0; i < arr.length; i++) {
        map.push(arr[i].split(''));

    }

    var startCol;
    var startRow;

    //Calc the start position.

    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split('');
        for (var j = 0; j < arr[i].length; j++) {
            if (line[j] == 'o') {
             startRow = Number(i);
             startCol = Number(j);
        }
    }
}

    var changePositionWith = [];
    changePositionWith.push(0);

    //Define with how much columns the position of the parachute will change in each row.
    for (var i = 1; i < arr.length; i++) {
        var line = arr[i].split('');
        var count = 0;
        line.forEach(function (token) {
            if (token == '>') {
                count += 1;
            }
            else if (token == '<') {
                count -= 1;
            }

        });
        changePositionWith.push(count);
    }

    for (var i = startRow; i < map.length; i++) {
        startCol += changePositionWith[i];
        if (map[i][startCol] == '/' || map[i][startCol] == '\\' || map[i][startCol] == '|') {
            console.log('Got smacked on the rock like a dog!');
            console.log(i + ' ' + startCol);
            break;
        }
        else if ((map[i][startCol] == '~')) {
            console.log('Drowned in the water like a cat!');
            console.log(i + ' ' + startCol);
            break;
        }
        else if ((map[i][startCol] == '_')) {
            console.log('Landed on the ground like a boss!');
            console.log(i + ' ' + startCol);
            break;
        }

    }
}
solve(['-------------o-<<--------',
    '-------->>>>>------------',
    '---------------->-<---<--',
    '------<<<<<-------/\\--<--',
    '--------------<--/-<\\----',
'>>--------/\\----/<-<-\\---',
    '---------/<-\\--/------\\--',
'<-------/----\/--------\\-',
'\\------/--------------<-\\',
'-\\___~/------<-----------'
]);
