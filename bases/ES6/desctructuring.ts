(() => {

    type AvangersType = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    
    const avengers: AvangersType = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey JR',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };

    const {
        poder,
        nick,
        vision
    } = avengers;

    const printAvenger = ({activo, poder, ironman, ...rest}:AvangersType) => {
        console.log(activo, poder, ironman, rest)
    }

    printAvenger(avengers)
    console.log(poder, vision.toLocaleUpperCase(), nick)
})()