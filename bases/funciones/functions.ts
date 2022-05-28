(() => {

    const hero : string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activaBatiseñal = ():string => {
        return 'Batiseñal activada';
    };

    console.log(typeof activaBatiseñal);

    //En TS el tipo de retorno de la función es la que domina
    const heroName = returnName();

})()