function solve(args) {
    var chars = [];
    for (var i = 0; i < args.length; i++) {
        chars.push(args[i].split(''));
    }

    for (var i = 0; i < args.length - 1; i++) {

        for (var j = 0; j < args[i].length; j++) {
            if (args[i][j] == args[i + 1][j] &&
                args[i][j] == args[i + 1][j - 1] &&
                args[i][j] == args[i + 1][j + 1]) {
                chars[i][j] = "*";
                chars[i + 1][j] = "*";
                chars[i + 1][j - 1] = "*";
                chars[i + 1][j + 1] = "*";
            }
        }

    }

    var withStars = chars.join("\n");
    console.log(withStars.replace(/\,/g, ''));
}
solve(["dffdsgyefg", "ffffeyeee", "jbfffays", "dagfffdsss", "dfdfa", "dadaaadddf", "sdaaaaa", "daaaaaaasf"]);