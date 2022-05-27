(() => {

    //El uso de never no permite que se siga ejecutando el código que sigue.
    //Una función never termina usualmente con un error
    const error = (message: string):never => {
        throw new Error(message)
    }

    const errorOrNumber = (message: string):(never| number) => {
        if(false) {
            throw new Error(message);
        } 

        return 1;
    }
    console.log(errorOrNumber("ErrorOrNumber"))
    error('Auxilio');

    //Esta linea no se ejecuta
    console.log("HOLA MUNDO");
})()