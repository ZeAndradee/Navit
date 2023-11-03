<!-- GraficoRadar.svelte -->

<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let radarChart;
  
    let data = {
      labels: ['Alegre', 'Atento', 'Calmo', 'Triste', 'Confuso', 'Agitado'],
      datasets: [
        {
          label: 'Media Pacientes',
          data: [4, 6, 8, 5, 7, 9], // Substitua esses valores pelas suas variáveis
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    };
  
    let config = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        maintainAspectRatio: false,
      },
    };
  
    onMount(() => {
      const ctx = document.getElementById('radar-chart');
      if (ctx) {
        radarChart = new Chart(ctx, config);
      }
    });
  </script>
  
  <style>
    /* Estilo para posicionar o gráfico no canto inferior direito e definir o tamanho */
    #radar-chart {
      position: fixed;
      scale: 10px;
      bottom: 30px;
      width: 425px;  /* Ajuste o tamanho conforme necessário */
      height: 470px; /* Ajuste o tamanho conforme necessário */
    }
  </style>
  
  <canvas id="radar-chart"></canvas>
  