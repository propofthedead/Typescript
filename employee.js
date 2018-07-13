var Employee = /** @class */ (function () {
    function Employee(id, name, manager) {
        this.id = id;
        this.name = name;
        this.isManager = manager;
    }
    Employee.prototype.print = function () {
        console.log(this.name);
    };
    return Employee;
}());
var arr = [
    new Employee(1, 'greg', false),
    new Employee(2, "Lisa", true)
];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var empl = arr_1[_i];
    empl.print();
}
