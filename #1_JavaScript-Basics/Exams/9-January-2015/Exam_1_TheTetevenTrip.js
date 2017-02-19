function solve(arr) {

    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split(' ');
        var carModel = tokens[0];
        var fuelType = tokens[1];
        var route = Number(tokens[2]);
        var luggageWeight = Number(tokens[3]);
        var quantityFuel = 0;
        var extraFuelLuggage = luggageWeight * 0.01;
        var c;

        if (fuelType == 'gas') {
            c = 1.2;
            quantityFuel = (c * 100) / 10;
            quantityFuel += extraFuelLuggage;
            var extraSnowCons;
            if (route == 1) {
                extraSnowCons = 0.3 * quantityFuel;
                extraSnowCons = 10 * (extraSnowCons / 100);
                quantityFuel = 110 * (quantityFuel / 100);
                quantityFuel += extraSnowCons;
                quantityFuel = Math.round(quantityFuel);
                console.log(carModel + ' ' + fuelType + ' ' + route + ' ' + quantityFuel);
            }
            else if (route == 2) {
                extraSnowCons = 0.3 * quantityFuel;
                extraSnowCons = 30 * (extraSnowCons / 100);
                quantityFuel = 95 * (quantityFuel / 100);
                quantityFuel += extraSnowCons;
                quantityFuel = Math.round(quantityFuel);
                console.log(carModel + ' ' + fuelType + ' ' + route + ' ' + quantityFuel);
            }
        }
        else if (fuelType == 'petrol') {
            c = 1;
            quantityFuel = (c * 100) / 10;
            quantityFuel += extraFuelLuggage;
            var extraSnowCons;
            if (route == 1) {
                extraSnowCons = 0.3 * quantityFuel;
                extraSnowCons = 10 * (extraSnowCons / 100);
                quantityFuel = 110 * (quantityFuel / 100);
                quantityFuel += extraSnowCons;
                quantityFuel = Math.round(quantityFuel);
                console.log(carModel + ' ' + fuelType + ' ' + route + ' ' + quantityFuel);
            }
            else if (route == 2) {
                extraSnowCons = 0.3 * quantityFuel;
                extraSnowCons = 30 * (extraSnowCons / 100);
                quantityFuel = 95 * (quantityFuel / 100);
                quantityFuel += extraSnowCons;
                quantityFuel = Math.round(quantityFuel);
                console.log(carModel + ' ' + fuelType + ' ' + route + ' ' + quantityFuel);
            }

        }
        else if (fuelType == 'diesel') {
            c = 0.8;
            quantityFuel = (c * 100) / 10;
            quantityFuel += extraFuelLuggage;
            var extraSnowCons;
            if (route == 1) {
                extraSnowCons = 0.3 * quantityFuel;
                extraSnowCons = 10 * (extraSnowCons / 100);
                quantityFuel = 110 * (quantityFuel / 100);
                quantityFuel += extraSnowCons;
                quantityFuel = Math.round(quantityFuel);
                console.log(carModel + ' ' + fuelType + ' ' + route + ' ' + quantityFuel);
            }
            else if (route == 2) {
                extraSnowCons = 0.3 * quantityFuel;
                extraSnowCons = 30 * (extraSnowCons / 100);
                quantityFuel = 95 * (quantityFuel / 100);
                quantityFuel += extraSnowCons;
                quantityFuel = Math.round(quantityFuel);
                console.log(carModel + ' ' + fuelType + ' ' + route + ' ' + quantityFuel);
            }

        }

    }

}
solve(['BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54']);
