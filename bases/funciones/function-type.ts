(() => {
    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) =>`Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    let myFunction: (y: number, z: number ) => number;
    let mySecondFunction : (a:string) => string;
    let myThirdFunction : () => string;

    /* myFunction = 10;
    console.log(myFunction); */

    myFunction = addNumber;
    console.log(myFunction(1,2));

    mySecondFunction = greet;
    console.log(mySecondFunction('Clark'))
    
    myThirdFunction = saveTheWorld;
    console.log(myThirdFunction());
})()