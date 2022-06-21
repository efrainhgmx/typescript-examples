export const printObject = (argument: any) => {
    console.log(argument);
}


export function genericFunction<T>(argunment: T):T {
    return argunment;
}


export const genereFucntionArrow = <T>(argument: T): T => {
    return argument;
}