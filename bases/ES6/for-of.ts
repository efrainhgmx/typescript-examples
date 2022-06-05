(() => {
    type Avenger = {
        name: string;
        weapon: string;
    };

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armoursuit'
    };

    const captainamerica: Avenger = {
        name: 'Steve Rogers',
        weapon: 'Shield',
    };

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };

    const avengers: Avenger[] = [ironman, thor, captainamerica];

    for (let i = 0; i < avengers.length; i++) {
        const avenger = avengers[i];
        //console.log(avenger)
    }

    for (const avenger of avengers) {
        //console.log(avenger);
    }

})()