"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
//# sourceMappingURL=main.js.map