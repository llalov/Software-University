var app = app || {};

app.homeViewBag = (function () {
    function showWelcomePageGuest(selector) {
        $.get('templates/welcome-guest.html', function(templ) {
            $(selector).html(templ);
        })
    }

    function showWelcomePageUser(selector, data) {
        $.get('templates/welcome-user.html', function(templ) {
            var renderedData = Mustache.render(templ, data);
            $(selector).html(renderedData);
        })
    }

    function showHomePage(selector, data) {
        $.get('templates/welcome-user.html', function(templ) {
            var renderedData = Mustache.render(templ, data);
            $(selector).html(renderedData);
        })
    }

    return {
        load: function () {
            return {
                showWelcomePageGuest: showWelcomePageGuest,
                showWelcomePageUser: showWelcomePageUser,
                showHomePage: showHomePage
            }
        }
    }
}());
