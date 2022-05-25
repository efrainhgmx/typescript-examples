(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';

    console.log((avenger as string).charAt(1));

    avenger = 150.25458;

    console.log(<Number>avenger.toFixed(2));
})()