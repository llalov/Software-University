var app = app || {};

(function(schoolSystem){
    function Semester(name) {
        this._name = name;
    }

    Semester.prototype.getName = function() {
        return this._name;
    };

    schoolSystem.Semester = Semester;

}(app));
