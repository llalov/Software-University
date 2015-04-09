function solve (arr) {
    var array= [];

    for (var i = 0; i < arr.length; i++) {
        var line = arr[i].split(/\s+/g).join(' ');
        var res = line.replace(/vs\./g,' vs. ');
        var final = res.split(/\s+/g).join(' ');
        var final2 = final.replace(/:/g, ' : ');
        var final3 = final2.replace(/\s{2,}/g,' ');

        var tokens = final3.split(/( vs\. )|( : )/g);

        console.log(tokens);
    }


    function existsPlayer (arr, name) {
        var exists = false;
        arr.forEach(function(element) {
            if (element.name == name) {
                exists = true;
            }
        });
        return exists;
    }

}
solve(['Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David Ferrer : 6-4 7-6',
    'Tomas Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre        			Agassi:2-1']);
