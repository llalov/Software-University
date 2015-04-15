function solve(queryStrings) {
    var result = [];

    queryStrings.forEach(function (line) {
        var keys = {};

        line.replace(/.+?(?=\?)(\?)+/g, '') // Remove url and '?' symbol
            .replace(/([^=&]+)=([^&]*)/g,   // Regex to match key/value pairs
            function (full, key, value) {   // Example: http://www.w3schools.com/jsref/jsref_replace.asp
                key = key
                    .split('%20').join(' ')  // Replace '%20' with empty space
                    .replace(/[\+]+/g, ' ')  // Replace '+' with empty space
                    .replace(/\s{2,}/g, ' ') // Replace multiple (2 or more) whitespaces with one
                    .trim();                 // Trim whitespaces at the beginning and at the end of the string

                value = value
                    .split('%20').join(' ')
                    .replace(/[\+]+/g, ' ')
                    .replace(/\s{2,}/g, ' ')
                    .trim();

                keys[key] = (keys[key] ? keys[key] + ', ' : '[')     + value;
                return '';
            });

        for (var key in keys) {
            result.push(key + '=' + keys[key] + ']');
        }
        result.push('\r\n');
    });

    console.log(result.join('').trim());
}

solve(['foo=%20foo&value=+val&foo+=5+%20+203', 'foo=poo%20&value=valley&dog=wow+', 'url=https://softuni.bg/trainings/coursesinstances/details/1070', 'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php']);
