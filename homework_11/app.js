var University = /** @class */ (function () {
    function University(name, department) {
        this.name = name;
        this.department = department;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.name + "'s " + this.department + " " + year + " students");
    };
    return University;
}());
var mum = new University('MUM', 'Computer Science');
mum.graduation(2019);
