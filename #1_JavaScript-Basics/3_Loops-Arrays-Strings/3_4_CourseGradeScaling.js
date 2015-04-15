function solve(arr) {
    var arrStudents = [];
    arr.forEach(function (arr) {
        arr.score += (arr.score * 0.1);
        if (arr.score >= 100) {
            arr.hasPassed = true;
            arrStudents.push(arr);
        }
    });
    var sorted = arrStudents.sort(function (a, b) {
        return a.name > b.name;
    });

    console.log(JSON.stringify(sorted));
}

solve([{'name': 'Пешо', 'score': 91}, {'name': 'Лилия', 'score': 290}, {
    'name': 'Алекс',
    'score': 343
}, {'name': 'Габриела', 'score': 400}, {'name': 'Жичка', 'score': 70}]);






