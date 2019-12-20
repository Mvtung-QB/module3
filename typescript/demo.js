var a;
var b;
var ar = [1, 2, 3, 4];
var ar1 = [5, 6, 7, 8];
console.log(ar1);
var son = {
    name: "Son",
    age: 25,
    run: function () {
        return 15 + " Km2";
    }
};
var thMan = /** @class */ (function () {
    function thMan(name, age) {
        this.name = name;
        this.age = age;
    }
    thMan.prototype.run = function () {
        return 20 + "km2";
    };
    thMan.prototype.toString = function () {
        return "name: " + this.name + " age: " + this.age + " speed: " + this.run();
    };
    return thMan;
}());
var myname = new thMan("tung", 27);
console.log(myname.toString());
console.log(son.name + son.age + son.run());
