var app = app || {};

(function(schoolSystem){
    function Human(name) {
        var regExpression = /^[a-zA-Z\s]*$/;
        if(regExpression.test(name)) {
            this._name = name;
        }
        else {
            alert('Invalid name. Name should contain only letters and whitespaces.')
        }
    }

    /*Human.prototype.setName = function(name) {

    };*/

    Human.prototype.getName = function() {
        return this._name;
    };

    schoolSystem.Human = Human;

}(app));
