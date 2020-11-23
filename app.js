let moduloProductos = require('./productos');//importo el modulo de productos.js

let process = require('process');
let comando = process.argv[2];//para dar la orden desde la consola

switch (comando) {

    case 'listar':

        let productos = moduloProductos.leerJSON();
        
        console.log('------------------')
        console.log("Lista de productos");
        console.log('------------------');    
        
        productos.forEach( producto => {
            console.log('id: ' + producto.id + ' Producto: ' + producto.name + ' Precio: ' + producto.price)
        });
        
        break;

    case 'agregar':

        let producto = process.argv[3];
        let precio = Number(process.argv[4]);
        
        if(producto === undefined || precio === undefined){

            console.log('----------------------------------------');
            console.log("Tenés que escribir un nombre y precio de producto");
            console.log('----------------------------------------');

        }else{
            moduloProductos.escribirJSON(producto, precio);

            console.log('------------------------------');
            console.log("Producto añadido correctamente");
            console.log('------------------------------');
        }
            break; 
    
    case 'filtrar':

        let precioMinimo = process.argv[3];
        let precioMaximo = process.argv[4];
        
        if(precioMinimo == undefined){

            console.log('-----------------------------------');
            console.log("Tenés que escribir un precio minimo");
            console.log('-----------------------------------');

        }else if(precioMaximo == undefined){

            console.log('-----------------------------------');
            console.log("Tenés que escribir un precio maximo");
            console.log('-----------------------------------');

        }else{

            let productosFiltrados = moduloProductos.filtrarJSON(precioMinimo, precioMaximo);

            console.log('---------------------------------');
            console.log("Éstos son los productos filtrados");
            console.log('---------------------------------');
            
            productosFiltrados.forEach(producto => {
                console.log('Producto: ' + producto.name + ' Precio: ' + producto.price)  
            });
        };
        
        break;

    case 'cambiarPrecio':
        
        let id = Number(process.argv[3]);
        let nuevoPrecio = Number(process.argv[4]);    
        
        if(id == undefined || nuevoPrecio == undefined){

            console.log('--------------------------------------------------------------');
            console.log("Tenés que pasar dos parámetros, id(producto) y su nuevo precio");
            console.log('--------------------------------------------------------------');

        }
        
        moduloProductos.cambiarPrecio(id, nuevoPrecio);

        console.log('--------------------------------');
        console.log('Producto modificado correctamente');
        console.log('--------------------------------');
        
        break;

    case 'eliminar':
        
        let deleteId = Number(process.argv[3]);
        
        if(deleteId == undefined){

            console.log('-------------------------------------');
            console.log('Ingresa el id del producto a eliminar');
            console.log('-------------------------------------');

        };

        moduloProductos.eliminar(deleteId);
        
        console.log('--------------------------------');
        console.log('Producto eliminado correctamente');
        console.log('--------------------------------');
        
        break;

    case 'buscar':

        let nombreProducto = process.argv[3];
        let productosBuscados = moduloProductos.buscar(nombreProducto);
        
        if(productosBuscados.length !== 0){
            
            console.log('-------------------------');
            console.log('Resultados de la búsqueda');
            console.log('-------------------------');

        productosBuscados.forEach(producto => {
        console.log('id: '+ producto.id +' Producto: ' + producto.name + ' Precio: ' + producto.price)
        
        });
        }else{

            console.log('----------------------');
            console.log('Producto no encontrado');
            console.log('----------------------');

        }
    
    }