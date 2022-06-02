"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    let mySecondFunction;
    let myThirdFunction;
    /* myFunction = 10;
    console.log(myFunction); */
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    mySecondFunction = greet;
    console.log(mySecondFunction('Clark'));
    myThirdFunction = saveTheWorld;
    console.log(myThirdFunction());
})();
//# sourceMappingURL=function-type.js.map