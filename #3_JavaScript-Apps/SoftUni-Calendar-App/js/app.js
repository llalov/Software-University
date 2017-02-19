var app = app || {};

(function() {
    var router = Sammy(function() {
        var selector = '#container';

        var requester = app.requester.load('kid_Z12q_TEayW', '239e252bf3af45c7b893cff84d3dd412', 'https://baas.kinvey.com/');

        var userViewBag = app.userViewBag.load();
        var homeViewBag = app.homeViewBag.load();
        var calendarViewBag = app.calendarViewBag.load();

        var userModel = app.userModel.load(requester);
        var calendarModel = app.calendarModel.load(requester);

        var userController = app.userController.load(userViewBag, userModel);
        var homeController = app.homeController.load(homeViewBag);
        var calendarController = app.calendarController.load(calendarViewBag, calendarModel);

        this.before({except:{path:'#\/(login\/|register\/)?'}}, function() {
            if(!sessionStorage['sessionId']) {
                this.redirect('#/');
                return false;
            }
        });

        this.before(function() {
            if(!sessionStorage['sessionId']) {
                $('#menu').empty().load('templates/menu-login.html');

            } else {
                $('#menu').empty().load('templates/menu-home.html');
                //$('#welcomeMenu').text('Welcome, ' + sessionStorage['fullName']);
            }
        });

        this.get('#/welcomeUser/', function() {
            homeController.loadWelcomePageUser(selector);
        });

        this.get('#/', function() {
            homeController.loadWelcomePageGuest(selector);
        });

        this.get('#/home/', function() {
            homeController.loadHomePage(selector);
        });


        this.get('#/login/', function() {
            userController.loadLoginPage(selector);
        });

        this.get('#/register/', function() {
            userController.loadRegisterPage(selector);
        });

        this.get('#/logout/', function() {
            userController.logout();
        });

        this.get('#/calendar/list/', function() {
           calendarController.loadLectures(selector);
        });

        this.get('#/calendar/my/', function() {
            calendarController.loadMyLectures(selector);
        });

        this.get('#/calendar/add/', function() {
            calendarController.loadAddLecture(selector);
        });

        this.get('#/calendar/edit/', function() {
            calendarController.loadEditLecture(selector);
        });

        this.get('#/calendar/delete/', function() {
            calendarController.loadDeleteLecture(selector);
        });

        this.bind('redirectUrl', function(ev, data){
            this.redirect(data.url);
        });

        this.bind('login', function(ev, data){
           userController.login(data);
        });

        this.bind('register', function(ev, data){
            userController.register(data);
        });

        this.bind('addLecture', function(ev, data){
           calendarController.addLecture(data);
        });

        this.bind('editLecture', function(ev, data){
            calendarController.loadEditLecture(selector, data);
        });

        this.bind('deleteLecture', function(ev, data){
            calendarController.loadDeleteLecture(data._id, data);
        });
    });

    router.run('#/');
} ());
