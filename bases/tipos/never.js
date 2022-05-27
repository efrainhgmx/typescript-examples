"use strict";
(() => {
    //El uso de never no permite que se siga ejecutando el código que sigue.
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
    //Esta linea no se ejecuta
    console.log("HOLA MUNDO");
})();
