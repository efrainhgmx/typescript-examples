"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activaBatiseñal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activaBatiseñal);
    //En TS el tipo de retorno de la función es la que domina
    const heroName = returnName();
})();
