var Student = /** @class */ (function () {
    function Student(id, first, last, sat, active) {
        this.Id = id;
        this.Firstname = first;
        this.Lastname = last;
        this.SAT = sat;
        this.Active = active;
    }
    Student.prototype.log = function () {
        var msg = this.Id + ", " + this.Firstname + " " + this.Lastname + ", " + this.Active + ", " + this.SAT;
        console.log(msg);
    };
    return Student;
}());
var s1 = new Student(1, "John", "doe", 1200, true);
var s2 = new Student(2, "Foster", "Stulen", 1000, false);
s1.log();
s2.log();
