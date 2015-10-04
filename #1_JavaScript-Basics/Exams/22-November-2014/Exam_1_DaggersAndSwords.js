function solve (arr) {

    var output = '';
    for (var i = 0; i < arr.length; i++) {
        var length = Math.floor(Number(arr[i]));
        var type = '';
        var application = '';
        if(length <= 10) {
            continue;
        }
        else if(length > 40) {
            type = 'sword';
        }
        else {
            type = 'dagger';
        }
        if (length % 5 === 1) {
            application = 'blade';
        }
        else if (length % 5 === 2) {
            application = 'quite a blade';
        }
        else if (length % 5 === 3) {
            application = 'pants-scraper';
        }
        else if (length % 5 === 4) {
            application = 'frog-butcher';
        }
        else if (length % 5 === 0) {
            application = '*rap-poker'
        }

        output +='<tr><td>'+length+'</td><td>'+type+'</td><td>'+application+'</td></tr>'+'\n';


    }
    console.log(
    '<table border="1">'+'\n'+
    '<thead>'+'\n'+
    '<tr><th colspan="3">Blades</th></tr>'+'\n'+
    '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>'+'\n'+
    '</thead>'+'\n'+
    '<tbody>'+'\n'+
    output+
    '</tbody>'+'\n'+
    '</table>'
    );

}
solve(['17.8', '19.4', '13', '55.8', '126.96541651','3']);
