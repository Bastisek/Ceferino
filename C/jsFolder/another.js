document.addEventListener('DOMContentLoaded', function() {
    const saldo = document.getElementById('saldo');
    const listaPedidos = document.getElementById('lista-pedidos');
    const formMenu = document.getElementById('form-menu');
    
    // Datos de ejemplo
    let saldoDisponible = 100.00;
    let pedidosAnteriores = [
        { id: 1, descripcion: 'Pizza Margarita', fecha: '2024-07-01', precio: 10 },
        { id: 2, descripcion: 'Hamburguesa Clásica', fecha: '2024-07-02', precio: 8 },
        { id: 3, descripcion: 'Ensalada César', fecha: '2024-07-03', precio: 6 }
    ];

    function cargarDatos() {
        saldo.textContent = `$${saldoDisponible.toFixed(2)}`;

        pedidosAnteriores.forEach(pedido => {
            const pedidoItem = document.createElement('li');
            pedidoItem.textContent = `${pedido.fecha} - ${pedido.descripcion} - $${pedido.precio}`;
            listaPedidos.appendChild(pedidoItem);
        });
    }

    formMenu.addEventListener('submit', function(event) {
        event.preventDefault();

        const preferencias = document.getElementById('menu-preferencias').value;

        // Aquí puedes manejar la lógica para guardar las preferencias del menú
        alert('Preferencias guardadas con éxito');

        formMenu.reset();
    });

    cargarDatos();
});
