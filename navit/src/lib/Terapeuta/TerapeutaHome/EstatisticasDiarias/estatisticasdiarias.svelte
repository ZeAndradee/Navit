<div class="background-div"> 
  <div class="estatisticasDiarias">
    <div class="div-txt">
      <span class="txt">Estatísticas Diárias</span>
      <span class="txt" style="font-size: 15px; color: #A3A3A3; font-weight: 400">{dataFormatada}</span>    </div>
      <div class="cards">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      
  </div>
  
</div>

<style>
  .background-div{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 344px;
    background:  #F8F7F1;
   
  }

  .div-txt{
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom: 18px;
  }

  .txt{
    margin-left: 8%;
    font-size: 20px;
    font-weight: 500;
    color: #525256;
    
  }

  .cards{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
</style>

<script>
  // @ts-nocheck
  import Card1 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card1.svelte";
  import Card2 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card2.svelte";
  import Card3 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3.svelte";


  // Data e hora estatisticas diarias
  let dataAtual = new Date();
  let opcoesData = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  let opcoesHora = { hour: '2-digit', minute: '2-digit' };
  let dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesData);
  let horaFormatada = dataAtual.toLocaleTimeString('pt-BR', opcoesHora);

  function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let diaDaSemana = primeiraLetraMaiuscula(dataFormatada.split(',')[0]);
  diaDaSemana = diaDaSemana.replace('.', ''); // Remove o ponto
  let restoDaData = dataFormatada.split(',')[1];
  dataFormatada = `${diaDaSemana},${restoDaData} ${horaFormatada}`;
</script>

