<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gráfico de cliques registrados</title>
</head>
<body>
    <div id="grafico">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
        <script>
            import grafico from "./grafico.svelte";
        </script>

        <grafico />
    </div>
</body>
</html>
<script>
    import {onMount} from "svelte";
    import Chart from "chart.js/auto";
  
    let chart;
  
    onMount(() => {
      const ctx = document.getElementById("line-chart");
      chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
          datasets: [
            {
              label: "Registro de Cliques - 2023",
              data: [5, 10, 5, 14, 20, 15, 6, 14, 8, 12, 15, 5, 10],
              borderWidth: 6,
              borderColor: "rgba(77, 166, 567, 3.54)",
              backgroundColor: "transparent",
            },
            {
              label: "Registro de Cliques - 2022",
              data: [9, 14, 11, 6, 5, 4, 3, 8, 11, 10, 13, 18, 6],
              borderWidth: 6,
              borderColor: "rgba(6, 204, 6, 0.85)",
              backgroundColor: "transparent",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              labels: {
                fontStyle: "bold",
              },
            },
          },
        },
      });
    });
  </script>
  
  <div class="line-chart-container">
    <canvas id="line-chart"></canvas>
  </div>
  
  <style>
    .line-chart-container {
      width: 100%;
      max-width: 600px; 
    }
  </style>