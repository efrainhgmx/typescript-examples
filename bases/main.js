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
define("IBWP2/players-ui/src/components/molecules/VenueDetailsOpeningTime/style", ["require", "exports", "styled-components", "styles"], function (require, exports, styled_components_1, styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpenCloseHours = exports.Day = exports.InfoDay = exports.Days = exports.Title = exports.OpeningTimeContainer = void 0;
    styled_components_1 = __importDefault(styled_components_1);
    exports.OpeningTimeContainer = styled_components_1.default.div `
  background-color: ${styles_1.color.white};
  box-sizing: border-box;
  padding-top: 40px;
  width: 100%;
  height: auto;
  position: relative;
  left: 0;

  @media ${styles_1.device.large} {
    left: 10%;
    height: 388px;
    max-width: 792px;
    padding: 40px;
    width: 100%;
  }

  @media ${styles_1.device.extraLarge} {
    left: 17%;
  }
`;
    exports.Title = styled_components_1.default.h1 `
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${styles_1.fontWeight.black};
  margin-bottom: 10px;
  padding: 0;
  padding-left: 40px;
  text-transform: uppercase;
  background-color: transparent;

  @media ${styles_1.device.large} {
    margin-bottom: 28px;
    padding-left: 0;
  }
`;
    exports.Days = styled_components_1.default.div `
  display: flex;
  flex-direction: column;

  @media ${styles_1.device.large} {
    align-content: space-between;
    flex-wrap: wrap;
    height: 240px;
    justify-content: flex-start;
    width: 630px;
  }
`;
    exports.InfoDay = styled_components_1.default.div `
  align-items: center;
  background-color: ${styles_1.color.white};
  box-sizing: border-box;
  display: flex;
  display: flex;
  font-size: 14px;
  height: 40px;
  padding-left: 40px;

  &:nth-child(even) {
    background-color: ${styles_1.color.grey14};
  }

  &:nth-child(6) {
    border-top: 2px solid;
  }

  @media ${styles_1.device.large} {
    height: 48px;
    padding-left: 0;
    padding-left: 40px;
    width: 295px;

    &:nth-child(6) {
      border: 0;
    }
  }
`;
    exports.Day = styled_components_1.default.p `
  color: ${styles_1.color.black};
  font-weight: bold;
  margin-right: 26px;
  width: 35px;
`;
    exports.OpenCloseHours = styled_components_1.default.p `
  color: ${styles_1.color.grey16};
`;
});
define("Retos-Web/typescript-examples/bases/interfaces/complejas", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=main.js.map