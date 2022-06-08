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
    console.log(antman.getAvenger());
})();
//# sourceMappingURL=main.js.map