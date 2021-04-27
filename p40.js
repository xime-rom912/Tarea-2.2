function ventasTot(num, sellers) {
    let productos = [];
    for (let i = 0; i < num; i++) {
        productos.push([]);
        for (let j = 0; j < 12; j++) {
            productos[i].push([]);
            let ventas = Math.floor(Math.random() * 5) + 1;
            for (let k = 0; k < ventas; k++) {
                productos[i][j].push({
                    vendedor: vendedores[Math.floor(Math.random() * sellers.length)],
                    venta: Math.floor(Math.random() * 500)+1
                });
            }
        }
    }
    return productos;
}

let months = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto','Septiembre', 'Octubre','Noviembre', 'Diciembre'];
let vendedores = ['Kevin', 'Martin', 'Soledad']
let ventas = ventasTot(4, vendedores);
ventas.forEach((producto, numero) => {
    console.log(`Ventas producto ${numero}`);
    producto.forEach((mes, numero) => {
        let total = mes.reduce((acc, current) => {
            return acc + current.venta
        }, 0);
        console.log(`${months[numero]} : ${total}`);
    });
    console.log('\n');
});
