function solve(arr) {

    var object = {};
    var regEx = /(\d+\.*\d*)/g;

    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split(' ');
        var name = tokens[0];
        var extension = tokens[1];
        var memory = Number(tokens[2].match(regEx));

        if (object[extension] === undefined) {
            object[extension] = {files: [], memory: 0};
        }
        object[extension].files.push(tokens[0]);
        object[extension].memory += memory;
    }

    var sortedKeys = Object.keys(object).sort();
    var sortedObject = {};

    for (var i = 0; i < sortedKeys.length; i++) {
        var key = sortedKeys[i];
        var extInfo = {
            files: object[key].files.sort(),
            memory: object[key].memory.toFixed(2)
        };
        sortedObject[key] = extInfo;
    }
    console.log(JSON.stringify(sortedObject));
}
solve(['sentinel .exe 15MB', 'zoomIt .msi 3MB', 'skype .exe 45MB', 'trojanStopper .bat 23MB', 'kindleInstaller .exe 120MB', 'setup .msi 33.4MB', 'winBlock .bat 1MB']);