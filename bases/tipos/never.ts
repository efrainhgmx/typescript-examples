(() => {


    const abc = (message: string): never => {
        throw new Error(message)
    }

    abc('Error en la funcion');
})();