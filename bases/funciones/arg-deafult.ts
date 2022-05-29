(() => {

    //Los valores requeridos, NO pueden ir despues de un opcional
    //A menos que se inicialice por defecto
    const fullName = (firstName: string, lastName?: string, upper:boolean = false): string => {
        if(upper) {
            return `${firstName.toLocaleUpperCase()} ${lastName?.toLocaleUpperCase()}`;
        } else {
            return `${firstName} ${lastName}`
        }
    };

    const name = fullName('Tony', 'Stark', true);

    console.log({name});
})()