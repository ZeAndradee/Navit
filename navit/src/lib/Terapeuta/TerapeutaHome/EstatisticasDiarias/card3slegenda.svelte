<script>
    
import Chart from 'chart.js/auto';
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
            cutout: 50,
            responsive: false,
            rotation: -35// Define o tamanho do espaço central vazio
        },
        });
      }
    }
  });
</script>

<!-- Renderizar o elemento canvas -->
<div class="card3">
    <!--Grafico-->
    <div class="grafico-status-pacientes"><canvas bind:this={canvas} width="155px" height="155px"/></div>
</div>

<style>
  .card3{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
  }
  .grafico-status-pacientes{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
  }
  

</style>
