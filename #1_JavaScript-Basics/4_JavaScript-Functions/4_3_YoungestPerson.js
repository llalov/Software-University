function findYoungestPerson(arr) {

    var withSmartphone = [];

    //finds the people with smartphones.
    arr.forEach(function (obj) {
        if (obj.hasSmartphone == true) {
            withSmartphone.push(obj);
            obj.getName = function () {
                return obj.firstname + ' ' + obj.lastname;
            }
        }
    });

    //sorting people with smartphones by age, and prints the first one from the array.
    withSmartphone.sort(function (a, b) {
        return a.age - b.age;
    });
    console.log('The youngest person is ' + withSmartphone[0].getName());
}
var people = [
    {firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false},
    {firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true},
    {firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true},
    {firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false}];
findYoungestPerson(people);
