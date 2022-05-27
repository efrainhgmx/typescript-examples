(() => {

    //Void signfica "vacio", es decir hace referencia a una funcion que...
    //...no retorna nada o undefined, es buena práctica documentar de esta manera.
    function callBatman():void {
        return;
    }

    const callSuperman = ():void => {
        return;
    }

    const a = callBatman()
    console.log(a)

})()