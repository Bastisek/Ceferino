document.addEventListener('DOMContentLoaded', function() {
    const productos = [
        { id: 1, nombre: 'Pizza Margarita', precio: 10, imagen: 'images/pizza_margarita.jpg' },
        { id: 2, nombre: 'Hamburguesa Clásica', precio: 8, imagen: 'images/hamburguesa_clasica.jpg' },
        { id: 3, nombre: 'Ensalada César', precio: 6, imagen: 'images/ensalada_cesar.jpg' },
        { id: 4, nombre: 'Sushi Roll', precio: 12, imagen: 'images/sushi_roll.jpg' },
        { id: 5, nombre: 'Taco de Pollo', precio: 5, imagen: 'images/taco_pollo.jpg' },
        { id: 6, nombre: 'Pasta Alfredo', precio: 11, imagen: 'images/pasta_alfredo.jpg' },
        { id: 7, nombre: 'Sandwich Vegetariano', precio: 7, imagen: 'images/sandwich_vegetariano.jpg' },
        { id: 8, nombre: 'Sopa de Tomate', precio: 4, imagen: 'images/sopa_tomate.jpg' },
        { id: 9, nombre: 'Batido de Fresa', precio: 3, imagen: 'images/batido_fresa.jpg' },
        { id: 10, nombre: 'Panqueques con Miel', precio: 5, imagen: 'images/panqueques_miel.jpg' },
        { id: 11, nombre: 'Pizza Pepperoni', precio: 11, imagen: 'images/pizza_pepperoni.jpg' },
        { id: 12, nombre: 'Helado de Vainilla', precio: 4, imagen: 'images/helado_vainilla.jpg' }
    ];

    let carrito = [];

    const catalogoDiv = document.getElementById('productos');
    const carritoDiv = document.getElementById('carrito');
    const totalDiv = document.getElementById('total');
    const confirmarBtn = document.getElementById('btn-confirmar');

    function cargarCatalogo() {
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto';

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;
            img.className = 'producto-imagen';

            const nombre = document.createElement('div');
            nombre.textContent = producto.nombre;
            nombre.className = 'producto-nombre';

            const precio = document.createElement('div');
            precio.textContent = `$${producto.precio}`;
            precio.className = 'producto-precio';

            const boton = document.createElement('button');
            boton.textContent = 'Agregar al carrito';
            boton.className = 'btn-agregar';
            boton.addEventListener('click', () => agregarAlCarrito(producto.id));

            productoDiv.appendChild(img);
            productoDiv.appendChild(nombre);
            productoDiv.appendChild(precio);
            productoDiv.appendChild(boton);
            catalogoDiv.appendChild(productoDiv);
        });
    }

    function agregarAlCarrito(idProducto) {
        const producto = productos.find(p => p.id === idProducto);
        carrito.push(producto);
        actualizarCarrito();
    }

    function actualizarCarrito() {
        carritoDiv.innerHTML = '';
        let total = 0;

        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto-carrito';
            productoDiv.textContent = `${producto.nombre} - $${producto.precio}`;
            carritoDiv.appendChild(productoDiv);
            total += producto.precio;
        });

        totalDiv.textContent = `Total: $${total}`;
    }

    function confirmarCompra() {
        alert('Compra confirmada');
        carrito = [];
        actualizarCarrito();
    }

    if (catalogoDiv) cargarCatalogo();
    if (confirmarBtn) confirmarBtn.addEventListener('click', confirmarCompra);
});
