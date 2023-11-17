<script>
  import photo from "$lib/assets/headerpaciente/imgpaciente.svg"
  import trespontinhos from "$lib/assets/headerpaciente/trespontinhos.svg"
</script>

<body>
  <div class ="caixa-paciente">
    <div class ="foto-paciente">
      <img src = {photo} alt="foto do paciente do prontuário correspondente">
    </div>
    <div>
    <p class = "nome-paciente">João Monero</p>
    <p class = "paciente-ref">Paciente</p>
    </div>
    <img src= {trespontinhos} alt="" class="imagem">
  </div>

</body>


<style>
  @import url('https://rsms.me/inter/inter.css');

  :global(.headerpaciente){
    width: 618px;
    height: 79px;
  }
  .caixa-paciente {
    display: flex;
    width: 618px;
    height: 79px;
    border-radius: 10px;
    background-color: #FFFFFF;
  }

  .foto-paciente img {
    display: absolute;
    width: 60px;
    height: 60px;
    top: -10.732px;
    border-radius: 50%;
    margin-top: 8px;
    margin-bottom: 11px;
    margin-left: 20px;
  }

  .nome-paciente {
    display: absolute;
    width: 153px;
    height: 24px;
    margin-bottom: 36px;
    margin-top: 19px;
    margin-left: 10px;
    top: 0.268px;
    color: #2C2929;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .paciente-ref {
    display: absolute;
    width: 144px;
    height: 11.402px;
    margin-top: -30px;
    margin-bottom: 5px;
    margin-left: 10px;
    flex-direction: column;
    flex-shrink: 0;
    color: #555;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .imagem  {
    display: absolute;
    margin-left: 309px;
    margin-top: 19px;
    margin-bottom: auto;
  }
  </style>