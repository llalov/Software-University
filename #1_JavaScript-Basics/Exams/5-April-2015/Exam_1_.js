function solve(arr) {

    var countOfCoins = 0;
    var gold, silver, bronze = 0;

    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split(' ');
        if (tokens[0].toLocaleLowerCase() == 'coin' || tokens[0].toLocaleLowerCase() == 'coins') {
            if (isInt(Number(tokens[1]))) {
                if (Number(tokens[1]) > 0) {
                    countOfCoins += Number(tokens[1]);
                }
            }
        }
    }

    gold = Math.floor(countOfCoins / 100);
    silver = Math.floor((countOfCoins % 100) / 10);
    bronze = countOfCoins % 10;
    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);
    function isInt(n) {
        return n % 1 === 0;
    }
}
solve(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);
