"use strict";
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
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Fe';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map