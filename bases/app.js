"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map