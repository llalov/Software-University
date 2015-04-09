function solve(arr) {
    var firstLine = arr[0].split('^');
    var studentCriteria = firstLine[0];
    var trainersCriteria = firstLine[1];
    var object = {students: [], trainers: []};

    for (var i = 1; i < arr.length; i++) {
        var objLine = JSON.parse(arr[i]);
        if (objLine['role'] == 'student') {
            object.students.push(objLine);
        }
        else if (objLine['role'] == 'trainer') {
            object.trainers.push(objLine);
        }
    }
    if (studentCriteria == 'level') {
        object.students.sort(function (a, b) {
            if (Number(a.level) > Number(b.level)) {
                return 1;
            }
            else if (Number(a.level) < Number(b.level)) {
                return -1;
            }
            else if (Number(a.id) > Number(b.id)) {
                return 1;
            }
            else if (Number(a.id) < Number(b.id)) {
                return -1;
            }
        })
    }
    else if (studentCriteria == 'name') {

        object.students.sort(function (a, b) {
            if (a.firstname > b.firstname) {
                return 1;
            }
            else if (a.firstname < b.firstname) {
                return -1;
            }
            else if (a.lastname > b.lastname) {
                return 1;
            }
            else if (a.lastname < b.lastname) {
                return -1;
            }
        })
    }

    if (trainersCriteria == 'courses') {
        object.trainers.sort(function (a, b) {
            if (Number(a.courses.length) > Number(b.courses.length)) {
                return 1;
            }
            else if (Number(a.courses.length) < Number(b.courses.length)) {
                return -1;
            }
            else if (Number(a.lecturesPerDay) > Number(b.lecturesPerDay)) {
                return 1;
            }
            else if (Number(a.lecturesPerDay) < Number(b.lecturesPerDay)) {
                return -1;
            }
        })
    }
    for (var i in object.students) {
        delete object.students[i]['level'];
        delete object.students[i]['town'];
        delete object.students[i]['role'];
        var certificate = object.students[i]['certificate'];
        delete object.students[i]['certificate'];
        object.students[i].averageGrade = calcAvg(object.students[i]['grades']);
        delete object.students[i]['grades'];
        object.students[i].certificate = certificate;
    }

    for (var i in object.trainers) {
        delete object.trainers[i]['town'];
        delete object.trainers[i]['role'];
    }

    console.log(JSON.stringify(object));

    function calcAvg(arr) {
        var sum = 0;
        var avg;
        for (var i = 0; i < arr.length; i++) {
            sum += Number(arr[i]);
        }
        avg = (sum / arr.length).toFixed(2);
        return avg;
    }

    /*    function sortByKey(array, key, secKey) {
     return array.sort(function(a, b) {
     var x = a[key]; var y = b[key];
     if(x !== y) {
     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     } else {
     x = a[secKey];
     y = b[secKey];
     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     }
     });
     }*/
}
solve(['level^courses',
    '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
    '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
    '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
    '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
    '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}']);
