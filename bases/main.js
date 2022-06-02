"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let heroesPower;
    (function (heroesPower) {
        heroesPower[heroesPower["aquaman"] = 0] = "aquaman";
        heroesPower[heroesPower["batman"] = 1] = "batman";
        heroesPower[heroesPower["flash"] = 5] = "flash";
        heroesPower[heroesPower["superman"] = 100] = "superman";
    })(heroesPower || (heroesPower = {}));
    const fuerzaFlash = heroesPower.flash;
    const fuerzaSuperman = heroesPower.superman;
    const fuerzaBatman = heroesPower.batman;
    const fuerzaAcuaman = heroesPower.aquaman;
    console.log(heroesPower);
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName.toLocaleUpperCase()} ${lastName === null || lastName === void 0 ? void 0 : lastName.toLocaleUpperCase()}`;
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Ken');
    console.log(superman);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    let mySecondFunction;
    let myThirdFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    mySecondFunction = greet;
    console.log(mySecondFunction('Clark'));
    myThirdFunction = saveTheWorld;
    console.log(myThirdFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activaBatiseñal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activaBatiseñal);
    const heroName = returnName();
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Otro nombre',
        age: 25,
        powers: ['Volar', 'Cantar'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
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
    let myCustomVariable = 'Efrain';
    console.log(typeof myCustomVariable);
    myCustomVariable = 25;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Banner',
        age: 42,
        powers: ['Smash'],
        getName() {
            return this.name;
        }
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(1));
    avenger = 150.25458;
    console.log(avenger.toFixed(2));
})();
(() => {
    const number = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    number.push(true);
    console.log(number);
    const letters = ['A', 'B', 'C', 'D'];
    const viilian = ['Omega', 'Dormamu', 'Duende Verde'];
    viilian.forEach(v => console.log(v.toUpperCase()));
    number.forEach(v => console.log(v));
    letters.push('E');
    console.log(letters);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["mediumMin"] = 3] = "mediumMin";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    let isActive = null;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos Salvamos");
    }
    avengers = Number();
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Volcan Negro`;
    console.log(`I'm ${linternaVerde}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Iron Man';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map