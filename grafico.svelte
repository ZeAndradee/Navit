<grafico>
    <div class="chart-container">
        <canvas class="line-chart"></canvas>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

    <script>
        var ctx = document.getElementsByClassName("line-chart");

        var chartGraph = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                datasets: [
                    {
                        label: "Registro de Cliques - 2023",
                        data: [1234, 2456, 8943, 100, 3113, 1500, 6050, 2000, 8050, 2558, 150, 2798, 1390],
                        borderWidth: 6,
                        borderColor: 'rgba(77, 166, 567, 3.54)',
                        backgroundColor: 'transparent'
                    },
                    {
                        label: "Registro de Cliques - 2022",
                        data: [4000, 1450, 5550, 2430, 7000, 4458, 8430, 5678, 90, 6559, 2960, 1865, 2399],
                        borderWidth: 6,
                        borderColor: 'rgba(6, 204, 6, 0.85)',
                        backgroundColor: 'transparent'
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    fontSize: 20,
                    text: "Gráfico de Cliques Registrados"
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            fontStyle: "bold"
                        }
                    }
                }
            }
        });
    </script>
</grafico>
<style>
    .chart-container {
        width: 550px;
        height: 400px; 
        position: fixed;
        right: 0px; 
        bottom: 200px;
    }
</style>
