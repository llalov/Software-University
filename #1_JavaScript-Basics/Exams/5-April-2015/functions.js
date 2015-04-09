//http://codebits.glennjones.net/cheatsheet/javascript.htm

// Sort array of objects by 2 object properties;
function sortArrayOfObjects(array, firstProp, secondProp) {
    array.sort(function (a, b) {
        if (a.firstProp > b.firstProp) {
            return 1;
        }
        else if (a.firstProp < b.firstProp) {
            return -1;
        }
        else if (a.secondProp > b.secondProp) {
            return 1;
        }
        else if (a.secondProp < b.secondProp) {
            return -1;
        }
        return array;
    });
}
//Calc average of array values:
function calcAvg(arr) {
    var sum = 0;
    var avg;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    avg = (sum / arr.length).toFixed(2);
    return avg;
}
//Sort object prop:
//Example: Vladko's Notebook: 22 November 2014
function sortObjectProperties(obj) {
    var keysSorted = Object.keys(obj).sort();
    var sortedObj = {};
    for (var i = 0; i < keysSorted.length; i++) {
        var key = keysSorted[i];
        sortedObj[key] = obj[key];
    }
    return sortedObj;
}

//Is the number Fibonacci
function isPerfectSquare(num) {
    var s = Math.floor(Math.sqrt(num));
    if (s * s === num) {
        return true;
    }
    else {
        return false;
    }
}
function isFibonacci(num) {
    if (isPerfectSquare((5 * num * num) + 4)) {
        return true;
    }
    else if (isPerfectSquare((5 * num * num) - 4)) {
        return true;
    }
    else {
        return false;
    }
}

// Extract hyperlinks in <a></a> tags
function extractLinks(input) {
    var html = input.join('\n');
    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
    var match;
    while (match = regex.exec(html)) {
        var hrefValue = match[3];
        if (hrefValue == undefined) {
            var hrefValue = match[4];
        }
        if (hrefValue == undefined) {
            var hrefValue = match[5];
        }
        console.log(hrefValue);
    }
}

// table = [{},{},{},{},{}]' : 28 July 2014 Sort Table
table.sort(function(a, b) {
    if(a.price === b.price) {
        return a.row.localeCompare(b.row);
    }
    else {
        return a.price - b.price;
    }
});

//