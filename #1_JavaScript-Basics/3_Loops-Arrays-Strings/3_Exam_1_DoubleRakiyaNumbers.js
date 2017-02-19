function solve(arg) {
    var start = Number(arg[0]);
    var end = Number(arg[1]);
    var output = '';
    if( start <= end) {
        for(var i = start; i <= end; i++) {
            if( i > 1000) {
                if(isRakiaNum(i)) {
                    output+= '<li><span class=\'rakiya\'>'+i+'</span><a href="view.php?id='+i+'>View</a></li>'+'\n';
                }
                else {
                    output += '<li><span class=\'num\'>'+i+'</span></li>'+'\n'
                }
            }
            else {
                output += '<li><span class=\'num\'>'+i+'</span></li>'+'\n'
            }
        }

    }
    var finalOutput = '<ul>'+'\n'+output+'</ul>';
    return console.log(finalOutput);
    function isRakiaNum (num) {
        var isRakia = false;
        var numToStr = String(num);
        var obj = {};
        var currNum;
        for(var i = 1; i < numToStr.length; i++) {
            currNum = numToStr.substr(i-1, 2);
            if(obj[currNum] === undefined) {
                obj[currNum] = i;
            }
            else if(i - obj[currNum] >= 2) {
                isRakia = true;
                break;
            }
        }
        return isRakia;
    }
}
solve([11210,11215]);
