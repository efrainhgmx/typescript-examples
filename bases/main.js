"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.averageAge = 35;
    const antman = new Avenger('Antman', 'Avengers', 'Scott Lang');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map