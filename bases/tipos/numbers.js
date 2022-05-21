"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos Salvamos");
    }
    avengers = Number();
    console.log({ avengers });
})();
