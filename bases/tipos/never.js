"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const errorOrNumber = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    console.log(errorOrNumber("ErrorOrNumber"));
    error('Auxilio');
    console.log("HOLA MUNDO");
})();
//# sourceMappingURL=never.js.map