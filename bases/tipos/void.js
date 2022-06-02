"use strict";
(() => {
    //Void signfica "vacio", es decir hace referencia a una funcion que...
    //...no retorna nada o undefined, es buena práctica documentar de esta manera.
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=void.js.map