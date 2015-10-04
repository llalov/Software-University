function solve(arr) {

    var tokens = arr[0].split(/\D+/g);
    var output = '';

    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i] === '') {
            output = output.slice(0, output.length - 1) + output.slice(output.length);
            break;
        }
        var symbol = toHex(Number(tokens[i])).toUpperCase();
        symbol = frontZeroPad(symbol, 4);
        symbol = '0x' + symbol;
        if (i != tokens.length - 1) {
            symbol += '-';
        }
        output += symbol;
    }
    console.log(output);

    function toHex(number) {
        var numHex = number.toString(16);
        return numHex;
    }

    function frontZeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
}

solve(['20']);
