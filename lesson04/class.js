"use strict";
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello my name is " + this.name);
    };
    return Person;
}());
var PersonTest = new Person("Test");
PersonTest.sayHello();
