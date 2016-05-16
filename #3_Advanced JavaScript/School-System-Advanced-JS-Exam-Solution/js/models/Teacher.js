var app = app || {};

(function (schoolSystem) {
    function Teacher(name, teachingSubject) {
        schoolSystem.Human.call(this, name);
        this._teachingSubject = teachingSubject || null;
    }

    Teacher.extends(schoolSystem.Human);

    Teacher.prototype.addGradeToStudent = function(student, gradeParamsObj) {
        if(student instanceof schoolSystem.Student) {
            if(this._teachingSubject == null) {
                if(
                    gradeParamsObj.hasOwnProperty('mark')&&
                    gradeParamsObj.hasOwnProperty('semester')&&
                    gradeParamsObj.hasOwnProperty('subject')
                  ) {

                    var grade = new schoolSystem.Grade;
                    grade.setMark(gradeParamsObj.mark);
                    grade.setSubject(gradeParamsObj.subject);
                    grade.setSemester(gradeParamsObj.semester);
                    student.addGrade(grade);
                }
            }
            else if(this._teachingSubject !== null) {
                if(
                    gradeParamsObj.hasOwnProperty('mark')&&
                    gradeParamsObj.hasOwnProperty('semester')
                  ) {

                    var grade = new schoolSystem.Grade;
                    grade.setMark(gradeParamsObj.mark);
                    grade.setSubject(this._teachingSubject);
                    grade.setSemester(gradeParamsObj.semester);
                    student.addGrade(grade);
                }
            }
        }
        else {
            alert("Student: "+ student+" does not exists");
        }
    };

    Teacher.prototype.getSubject = function() {
        return this._teachingSubject;
    };

    schoolSystem.Teacher = Teacher;
}(app));