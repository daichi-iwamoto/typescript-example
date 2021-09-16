class Person {
    name: string;
    constructor(initName: string) {
        this.name = initName;
    }

    sayHello() {
        console.log(`Hello my name is ${this.name}`);
    }
}

const PersonTest = new Person("Test");
PersonTest.sayHello();