"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Ken',
        age: 32,
        powers: ['Super velocidad', 'Super Fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutanPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
    const wolverine = new Mutant(25, 'Wolverine', 'Logan');
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: 'XYC90',
            city: 'London'
        },
        getFullAdress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map