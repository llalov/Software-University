var app = app || {};

(function (schoolSystem) {
    function Student(name) {
        schoolSystem.Human.call(this, name);
        this._grades = [];

    }
    Student.extends(schoolSystem.Human);

    Student.prototype.getGrades = function() {
        return this._grades;
    };

    Student.prototype.addGrade = function(grade) {
        if(grade instanceof schoolSystem.Grade) {
            this._grades.push(grade);
        }
        else {
            alert(grade+' is not a instance of class Grade.')
        }

    };

    /*Student.prototype.getName = function() {
        return this._name;
    };*/

    schoolSystem.Student = Student;
}(app));
