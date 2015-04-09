function sortLetters(str, bool) {
    var output;
    if (bool == true) {
        output = str.split('')
            .sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            })
            .join('');
        console.log(output);
    }
    else {
        output = str.split('')
            .sort(function (a, b) {
                return b.toLowerCase().localeCompare(a.toLowerCase());
            })
            .join('');
        console.log(output);
    }
}
sortLetters('HelloWorld', true);