"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey JR',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };
    const { poder, nick, vision } = avengers;
    const printAvenger = (_a) => {
        var { activo, poder, ironman } = _a, rest = __rest(_a, ["activo", "poder", "ironman"]);
    };
    printAvenger(avengers);
    const avengerArr = ['Cap', true, 1520.15];
    const [capitan, hulk, power] = avengerArr;
})();
(() => {
    const ironman = {
        name: 'Tony Stark',
        weapon: 'Armoursuit'
    };
    const captainamerica = {
        name: 'Steve Rogers',
        weapon: 'Shield',
    };
    const thor, { name: , 'Thor': , weapon: , 'Mjolnir':  };
    const avengers = [ironman, thor, captainamerica];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
})();
(() => {
    const getName = () => {
    };
    getName();
})();
//# sourceMappingURL=main.js.map