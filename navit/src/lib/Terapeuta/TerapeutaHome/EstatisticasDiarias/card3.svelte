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
    <div class="txt-header-card"> 
      <span style="font-size: 18px; font-weight:500;">Status Pacientes</span>
      <div class="box-hoje">
        <span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span>
      </div>
    </div>
    <!--Grafico-->
    <div class="grafico-status-pacientes"><canvas bind:this={canvas} width="155px" height="155px"/></div>
    <div class="legenda">
      <div class="leg1"><div class="bola"></div> <span style="margin-left: 12px; color: black">Novo</span> <span style="margin-left: auto; color: black">{NovoSP}% <span style="color: #52C93F; font-weight:700">↑</span></span></div>
      <div class="leg1"><div class="bola" style="background-color: #006AFF;"></div> <span style="margin-left: 12px; color: black">Andamento</span> <span style="margin-left: auto; color: black">{AndamentoSP}% <span style="color: #52C93F; font-weight:700">↑</span></span></div>
      <div class="leg1"><div class="bola" style="background-color: #FF2727;"></div> <span style="margin-left: 12px; color: black">Finalizado</span> <span style="margin-left: auto; color: black">{FinalizadoSP}% <span style="color: #FF2727; font-weight:700">↓</span></span></div>
      
    </div>
    
</div>

<style>
  .card3{
    display: flex;
    width: 288px;
    height: 360px;
    margin-left: 8%;
    padding: 24px 24px 20px 22px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    border-radius: 10px;
    background: #FDFDFD;
    
  }
  .grafico-status-pacientes{
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
  }

  .legenda{
    margin-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  .leg1{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
  }

  .bola{
    height: 16px;
    width: 16px;
    background-color: #52C93F;
    border-radius: 50%;
  }
  .txt-header-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding-bottom: 12px;
  }

  .box-hoje{
    width: 52px;
    height: 24px;
    border-radius: 2px;
    padding: 4px 8px;
    background: #F4F5F7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
