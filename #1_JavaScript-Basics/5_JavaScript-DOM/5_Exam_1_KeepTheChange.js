function solve(arr) {

    var bill = Number(arr[0]);
    var mood = arr[1];
    var tip = 0;

    if (mood === 'happy') {
        tip = bill * 0.1;
    }
    else if (mood === 'married') {
        tip = bill * 0.0005;
    }
    else if (mood === 'drunk') {
        tip = bill * 0.15;
        var firstDigit;

        if (tip > 9 && tip < 100) {
            firstDigit = Math.floor(tip / 10);
            tip = Math.pow(tip, firstDigit);
        }
        else if (tip > 99 && tip < 1000) {
            firstDigit = Math.floor(tip / 100);
            tip = Math.pow(tip, firstDigit);
        }
        else if (tip > 999 && tip < 10000) {
            firstDigit = Math.floor(tip / 1000);
            tip = Math.pow(tip, firstDigit);
        }
        else if (tip > 9999 && tip < 100000) {
            firstDigit = Math.floor(tip / 10000);
            tip = Math.pow(tip, firstDigit);
        }
        else if (tip < 10) {
            tip = Math.pow(tip, tip);
        }
    }
    else {
        tip = bill * 0.05;
    }

    console.log(tip.toFixed(2));
}

solve(['200', 'drunk']);

//'1230.83', 'drunk'
//'716.00', 'bored'



