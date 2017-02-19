var app = app || {};

(function(schoolSystem){
    function Grade() {
        this._mark;
        this._subject;
        this._semester;
    }

    Grade.prototype.getSubject = function() {
        return this._subject;
    };

    Grade.prototype.getMark = function() {
        return this._mark;
    };

    Grade.prototype.getSemester = function() {
        return this._semester;
    };

    Grade.prototype.setMark = function(mark) {
        if(isNaN(mark)) {
            alert('Invalid mark');
        } else {
            this._mark = mark;
        }
    };

    Grade.prototype.setSubject = function(inputSubject) {
        var availableSubjects = schoolSystem.Subject.getSubjects();
        if(availableSubjects.hasOwnProperty(inputSubject)) {
            this._subject = inputSubject;
        } else {
            alert('Invalid subject: ' + inputSubject);
        }
    };

    Grade.prototype.setSemester = function(semester) {
        if(semester instanceof schoolSystem.Semester) {
            this._semester = semester;
        } else {
            alert('Invalid semester: '+ semester);
        }

    };

    schoolSystem.Grade = Grade;

}(app));
