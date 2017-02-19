(function () {
    'use strict';

    if (!localStorage['username']) {
        var username = prompt('Enter your username:');
        localStorage.setItem('username', username);
    }

    $('#greeting').text('Hello ' + localStorage['username'] + '!');

    if (!localStorage['visitsCount']) {
        localStorage.setItem('visitsCount', 0);
    }

    if (!sessionStorage['visitsCount']) {
        sessionStorage.setItem('visitsCount', 0);
    }

    sessionStorage['visitsCount']++;
    localStorage['visitsCount']++;

    $('<div>').text('Session visits: ' + sessionStorage['visitsCount']).appendTo('body');
    $('<div>').text('Total visits: ' + localStorage['visitsCount']).appendTo('body');

}());