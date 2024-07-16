document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('ventasChart').getContext('2d');
    const ventasChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
            datasets: [{
                label: 'Monto Promedio de Venta',
                data: generarDatosAleatorios(),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Día de la Semana'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Monto de Venta'
                    }
                }
            }
        }
    });

    function generarDatosAleatorios() {
        return [150, 180, 200, 170, 190]; // Puedes generar datos aleatorios más realistas aquí
    }

    function actualizarDatos() {
        ventasChart.data.datasets[0].data = generarDatosAleatorios();
        ventasChart.update();
    }

    setInterval(actualizarDatos, 5000); // Actualiza los datos cada 5 segundos

    // Función para simular cambios en los datos (solo para demostración)
    setInterval(function() {
        ventasChart.data.datasets[0].data = ventasChart.data.datasets[0].data.map(value => value + (Math.random() - 0.5) * 10);
        ventasChart.update();
    }, 2000); // Actualiza los datos cada 2 segundos
});
