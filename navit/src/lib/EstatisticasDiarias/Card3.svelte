<script>
    
import { Chart } from 'chart.js';
import { onMount } from 'svelte';
  // Obter uma referência ao elemento canvas
  // @ts-ignore

  //Variaveis do Grafico
  let canvas;
    var NovoSP = 20;
    var AndamentoSP = 54;
    var FinalizadoSP = 26;

  // Definir os dados e as opções para o gráfico
  // @ts-ignore
  let data = {
    datasets: [{
      data: [NovoSP, AndamentoSP, FinalizadoSP],
      backgroundColor: ['rgba(82, 201, 63, 1)', 'rgba(0, 106, 255, 1)', 'rgba(255, 39, 39, 1)'],
      borderWidth: 0,  
    }],
    
  };
   
  // Criar uma instância do gráfico após o componente ser montado
  onMount(() => {
    // @ts-ignore
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: {
            cutout: 45,
            responsive: false, // Define o tamanho do espaço central vazio
        },
        });
      }
    }
  });
</script>

<!-- Renderizar o elemento canvas -->
<div class="card3">
    <canvas bind:this={canvas} width="146px" height="146px"/>
</div>