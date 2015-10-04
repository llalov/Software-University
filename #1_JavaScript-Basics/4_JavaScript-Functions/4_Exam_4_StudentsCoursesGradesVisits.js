function solve(arr) {

    var object = {};

    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split('|');
        tokens[0] = tokens[0].trim();
        tokens[1] = tokens[1].trim();
        tokens[2] = Number((tokens[2].trim()));
        tokens[3] = Number((tokens[3].trim()));
        if (object[tokens[1]] == undefined) {
            object[tokens[1]] = {grades: [], visits: [], students: []};
        }

        object[tokens[1]].grades.push(tokens[2]);
        object[tokens[1]].visits.push(tokens[3]);

        if (object[tokens[1]].students.indexOf(tokens[0]) == -1) {
            object[tokens[1]].students.push(tokens[0]);
        }
    }

    var keysSorted = Object.keys(object).sort();
    var sortedObject = {};

    for (var i = 0; i < keysSorted.length; i++) {
        var key = keysSorted[i];
        var courseInfo = {
            avgGrade: avg(object[key].grades),
            avgVisits: avg(object[key].visits),
            students: object[key].students.sort()
        };
        sortedObject[key] = courseInfo;
    }

    console.log(JSON.stringify(sortedObject));

    function avg(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        var average = sum / array.length;
        average = Number(average.toFixed(2));
        return average;
    }
}

solve(['Peter Nikolov | PHP  | 5.50 | 8', 'Maria Ivanova | Java | 5.83 | 7', 'Ivan Petrov   | PHP  | 3.00 | 2', 'Ivan Petrov   | C#   | 3.00 | 2', 'Peter Nikolov | C#   | 5.50 | 8', 'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9']);