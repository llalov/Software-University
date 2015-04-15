function solve (arr) {

    var object = {};

    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split('|');

        if(object[tokens[0]] === undefined) {
            object[tokens[0]] = {age:0, name:'', opponents: [], rank: 0, wins: 1, losses:1};
        }

        if(tokens[1] == 'age') {
            object[tokens[0]].age = tokens[2];
        }
        else if (tokens[1] == 'name') {
            object[tokens[0]].name = tokens[2];
        }
        else if (tokens[1] == 'loss' ) {
            object[tokens[0]].opponents.push(tokens[2]);
            object[tokens[0]].losses += 1;
        }
        else if (tokens[1] == 'win' ) {
            object[tokens[0]].opponents.push(tokens[2]);
            object[tokens[0]].wins += 1;
        }

    }

    // for each property of 'object', calculates rank, sorts opponents, deletes wins and losses,
    // and delete property if it hasn't got a age or name property.

    for (var color in object) {
        object[color].rank = (object[color].wins / object[color].losses).toFixed(2);
        object[color].opponents.sort();
        delete object[color].wins;
        delete object[color].losses;
        if (object[color].age == 0 || object[color].name == '' ) {
            delete object[color];
        }
    }

    // Sort 'object' properties and assign them to the new 'sortedObject' object.
    var sortedObject = {};
    var sortedKeys = Object.keys(object).sort();

    for (var i = 0; i < sortedKeys.length; i++) {
        var key = sortedKeys[i];
        var colorInfo = {
            age:  object[key].age,
            name: object[key].name,
            opponents: object[key].opponents,
            rank: object[key].rank
        };
        sortedObject[key] = colorInfo;
    }

    // Print the 'sortedObject' object in JSON string format
    console.log(JSON.stringify(sortedObject));
}

solve(['purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);