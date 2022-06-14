"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return `Mundo salvado`;
        }
    }
    class Viilian extends Mutant {
        conquistarMundo() {
            return `Mundo conquistado !!!`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Viilian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAverage() {
            return this.name;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
        getAvenger() {
            return this.bio();
        }
    }
    Avenger.averageAge = 35;
    const antman = new Avenger('Antman', 'Avengers', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    ;
    class Xmen extends Avenger {
        constructor(name, realName, isMutan) {
            super(name, realName);
            this.isMutan = isMutan;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser minimo de 4 caracteres');
            }
            this.name = name;
        }
        getFullNamefromXmen() {
            console.log(super.getFullName());
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Xavier');
})();
//# sourceMappingURL=main.js.map