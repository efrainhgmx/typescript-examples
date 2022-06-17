"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`${this.nombre} tiene ${this.edad} es ${this.sexo} y esta ${this.estadoCivil}`);
    }
}
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