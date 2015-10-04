function solve(arr) {
// filter results between 0 and 400.
    var validScore = arr.filter(function (element) {
        return element >= 0 && element <= 400;
    });

// add results with 20% off to new array.
    var twentyPercentOffSorted = [];
    validScore.forEach(function (score) {
        var newScore = (score - (score * 0.2));
        twentyPercentOffSorted.push(newScore);
    });

// sort the array in ascending order.
    twentyPercentOffSorted = twentyPercentOffSorted.sort(function (a, b) {
        return a - b
    });

    console.log(twentyPercentOffSorted);
}

solve([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);