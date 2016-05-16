var app = app || {};

(function (schoolSystem) {
    function Principal(name) {
        schoolSystem.Human.call(this, name);

    }
    Principal.extends(schoolSystem.Human);

    schoolSystem.Principal = Principal;
}(app));