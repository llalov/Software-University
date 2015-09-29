function solve(arr) {

    var DS = '';
    var middle = '';

    var jumpsAllowed = Number(arr[0]);
    var trackLength = Number(arr[1]);
    var array = [];
    for (var i = 2; i < arr.length; i++) {
        var tokens = arr[i].split(', ');
        array.push({name: tokens[0], jumpDistance: Number(tokens[1]), curPosition: 0});
    }
    //Drawing DS, and Middle
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < trackLength; j++) {
            DS += '#'
        }
        if (i != 1) {
            DS += '\n';
        }
    }

    for (var j = 0; j < trackLength; j++) {
        middle += '.';
    }
    ////////////

    var winner = false;
    var winnerName;
    for (var i = 0; i < jumpsAllowed; i++) {
        if (winner == true) {
            break;
        }
        for (var j = 0; j < array.length; j++) {
            array[j].curPosition += array[j].jumpDistance;
            if (array[j].curPosition >= trackLength - 1) {
                winner = true;
                winnerName = array[j].name;
                break;

            }
        }

    }
    if (winner == true) {
        console.log(DS);
        for (var i = 2; i < arr.length; i++) {
            var char = array[i - 2].name.charAt(0).toUpperCase();
            var position = array[i - 2].curPosition;
            if (position > trackLength - 1) {
                position = trackLength - 1;
            }
            console.log(setCharAt(middle, position, char));
        }
        console.log(DS);
        console.log('Winner: ' + winnerName);
    }


    else if (winner == false) {
        var maxPosit = maxPosition(array);
        var maxArray = [];
        array.forEach(function (element) {
            if (element.curPosition == maxPosit) {
                maxArray.push(element);
            }

        });
        winnerName = maxArray[maxArray.length - 1].name;
        console.log(DS);
        for (var i = 2; i < arr.length; i++) {
            var char = array[i - 2].name.charAt(0).toUpperCase();
            var position = array[i - 2].curPosition;
            if (position > trackLength - 1) {
                position = trackLength - 1;
            }
            console.log(setCharAt(middle, position, char));
        }
        console.log(DS);
        console.log('Winner: ' + winnerName);

    }

    //FUNCTIONS

    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }

    function maxPosition(arr) {
        var maxPos = 0;
        arr.forEach(function (element) {
            if (element.curPosition > maxPos) {
                maxPos = element.curPosition;
            }
        });
        return maxPos;
    }
}
//solve(['10', '19', 'angel, 9', 'Boris, 10', 'Georgi, 3', 'Dimitar, 7']);
solve(['3', '5', 'cura, 1', 'Pepi, 1', 'UlTraFlea, 1', 'BOIKO, 1']);