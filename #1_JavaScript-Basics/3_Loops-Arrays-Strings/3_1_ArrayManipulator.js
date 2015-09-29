function solve(arr) {
//filtering the numbers from the array "input".
    var nums = arr.filter(function (item) {
        return typeof(item) === "number";
    });

//sorting numbers from the biggest to the smallest
    var sortedNums = nums.sort(function (a, b) {
        return b - a;
    });

// defining the most frequent number in the array.
    var occurrences = {};
    var max = {
        num: null,
        occur: 0
    };
    for (var i = 0; i < sortedNums.length; i++) {

        if (occurrences[String(sortedNums[i])] === undefined) {
            occurrences[String(sortedNums[i])] = 1;
        }
        else {
            occurrences[String(sortedNums[i])] += 1;
            if (occurrences[String(sortedNums[i])] >= max.occur) {
                max.occur = occurrences[String(sortedNums[i])];
                max.num = sortedNums[i];
            }
        }
    }
    // logging out the results.
    console.log('Min number: ' + sortedNums[sortedNums.length - 1]);
    console.log('Max number: ' + sortedNums[0]);
    console.log('Most frequent number: ' + max.num);
    console.log(sortedNums);
}
solve(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", {bunniesCount: 10}, [10, 20, 30, 40]]);