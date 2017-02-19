var app = app || {};

app.homeController = (function() {
    function HomeController(viewBag, model) {
        this.model = model;
        this.viewBag = viewBag;
    }

    HomeController.prototype.loadWelcomePageUser = function(selector) {
        var data = {
            username: sessionStorage['username']
        };
        this.viewBag.showWelcomePageUser(selector, data);
    };

    HomeController.prototype.loadWelcomePageGuest = function(selector) {
        this.viewBag.showWelcomePageGuest(selector);
    };

    HomeController.prototype.loadHomePage = function(selector) {
        var data = {
            //fullName: sessionStorage['fullName'],
            username: sessionStorage['username']
        };

        this.viewBag.showHomePage(selector, data);
    };


    return {
        load: function(viewBag, model) {
            return new HomeController(viewBag, model);
        }
    }
}());
