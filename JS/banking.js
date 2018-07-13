var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, desp) {
        this.Id = id;
        this.description = desp;
        this.balance = 0;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);
    function Savings(id, desc, intRate) {
        if (intRate === void 0) { intRate = 0.01; }
        var _this = _super.call(this, id, desc) || this;
        _this.intRate = intRate;
        return _this;
    }
    Savings.prototype.calcInterest = function () {
        var interest = this.balance * this.intRate;
        this.deposit(interest);
    };
    return Savings;
}(Account));
var acc1 = new Account(1);
var sav1 = new Savings(2);
