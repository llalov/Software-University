function solve(arr) {

    var dateLine = new Date(1973, 4, 25);
    var minDate = new Date(1900, 0, 1);
    var maxDate = new Date(2015, 0, 1);
    var biggestFan = dateLine;
    var biggestHater = dateLine;
    var found = false;
    var found2 = false;
    //var days = ['',"Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    //var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split('.');
        var day = Number(tokens[0]);
        var month = Number(tokens[1]) - 1;
        var year = Number(tokens[2]);

        var date = new Date(year, month, day);

        if (date > minDate && date < maxDate) {
            if (date >= dateLine) {  //fans
                if (date > biggestFan) {
                    biggestFan = date;
                    found = true;
                }
            }
            else if (date < dateLine) {  //haters
                if (date < biggestHater) {
                    biggestHater = date;
                    found2 = true;
                }
            }
        }
    }

    if (found == false && found2 == false) {
        console.log('No result');
    }
    else if (found == true && found2 == false) {
        console.log('The biggest fan of ewoks was born on ' + biggestFan.toDateString());
    }
    else if (found == false && found2 == true) {
        console.log('The biggest hater of ewoks was born on ' + biggestHater.toDateString());
    }
    else if (found == true && found2 == true) {
        console.log('The biggest fan of ewoks was born on ' + biggestFan.toDateString());
        console.log('The biggest hater of ewoks was born on ' + biggestHater.toDateString());
    }

}
solve(['22.03.2000']);
