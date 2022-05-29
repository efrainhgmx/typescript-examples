(() => {
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