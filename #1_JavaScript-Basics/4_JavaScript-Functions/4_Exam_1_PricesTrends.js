function solve (arr) {
    var output = '';
    var previous = 0;
    var current = 0;
    for(var i = 1; i < arr.length; i++) {
        previous = Number(((Math.round(Number(arr[i-1])*100))/100).toFixed(2));
        current = Number(((Math.round(Number(arr[i])*100))/100).toFixed(2));
        if(current > previous) {
            output += '<tr><td>'+current.toFixed(2)+'</td><td><img src=\"up.png\"/></td></td>'+'\n';
        }
        else if ( current === previous) {
            output += '<tr><td>'+current.toFixed(2)+'</td><td><img src=\"fixed.png\"/></td></td>'+'\n';
        }
        else if (current < previous) {
            output += '<tr><td>'+current.toFixed(2)+'</td><td><img src=\"down.png\"/></td></td>'+'\n';
        }
    }

    console.log('<table>'+'\n'+'<tr><th>Price</th><th>Trend</th></tr>'+'\n'+'<tr><td>'+((Math.round(Number(arr[0])*100))/100).toFixed(2)+'</td><td><img src=\"fixed.png\"/></td></td>');
    console.log(output+'</table>');
}
solve(['1.33',
    '1.35',
    '2.25',
    '13.00',
    '0.5',
    '0.51',
    '0.5',
    '0.5',
    '0.33',
    '1.05',
    '1.346',
    '20',
    '900',
    '1500.1',
    '1500.10',
    '2000']);
