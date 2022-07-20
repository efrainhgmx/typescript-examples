export interface Producto {
    desc: string;
    precio: number;

}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad',
    precio: 350
}

export function calculaISV(producto: Producto[]): [number, number] {
    let total = 0;

    producto.forEach(({ precio }) => {
        total += precio;
    });

    return  [total, total * 0.15];
}

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);

console.log(total, isv);