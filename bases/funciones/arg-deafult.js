"use strict";
(() => {
    //Los valores requeridos, NO pueden ir despues de un opcional
    //A menos que se inicialice por defecto
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
//# sourceMappingURL=arg-deafult.js.map