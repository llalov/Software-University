'use strict';
function solve(arg) {
    var start = parseInt(arg[0]);
    var end = parseInt(arg[1]);
    var tableRows = "";
    var fib;
    for (var i = start; i <= end; i++) {
        if (isFibonacci(i) === true) {
            fib = "yes";
        }
        else {
            fib = "no";
        }
        tableRows += "<tr><td>" + i + "</td><td>" + (i * i) + "</td><td>" + fib + "</td></tr>" + "\n";
    }
    var wrap = "<table>" + "\n" + "<tr><th>Num</th><th>Square</th><th>Fib</th></tr>" + "\n" + tableRows + "</table>";
    console.log(wrap);

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
}


