"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let heroesPower;
    (function (heroesPower) {
        heroesPower[heroesPower["aquaman"] = 0] = "aquaman";
        heroesPower[heroesPower["batman"] = 1] = "batman";
        heroesPower[heroesPower["flash"] = 5] = "flash";
        heroesPower[heroesPower["superman"] = 100] = "superman";
    })(heroesPower || (heroesPower = {}));
    const fuerzaFlash = heroesPower.flash;
    const fuerzaSuperman = heroesPower.superman;
    const fuerzaBatman = heroesPower.batman;
    const fuerzaAcuaman = heroesPower.aquaman;
    console.log(heroesPower);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map