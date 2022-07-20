import { calculaISV, Producto } from "./06-desc-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Tel 1',
        precio: 100
    },
    {
        desc: 'Tel 2',
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log(total, isv)