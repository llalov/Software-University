function extractObjects(array) {
    var filteredArray = [];

    for (var i = 0; i < array.length; i++) {
        if (Object.prototype.toString.call(array[i]) == "[object Object]") {
            filteredArray.push(array[i]);
        }
    }
    console.log(filteredArray);
}

extractObjects(["Pesho", 4, 4.21, {name: 'Valyo', age: 16}, {
    type: 'fish',
    model: 'zlatna ribka'
}, [1, 2, 3], "Gosho", {name: 'Penka', height: 1.65}]);
