<script>
  import photo from "$lib/assets/headerpaciente/imgpaciente.svg"
  import trespontinhos from "$lib/assets/headerpaciente/trespontinhos.svg"
</script>

<div class ="caixa-paciente">
  <div class="foto-nome">
    <div class ="foto-paciente">
      <img src = {photo} alt="foto do paciente do prontuário correspondente">
    </div>
    <div class="paciente-info">
      <span class="nome-paciente">João Monero</span>
      <span class="paciente-ref">Paciente</span>
    </div>
  </div>  
  <img src= {trespontinhos} alt="" class="imagem">
</div>

<style>
  .caixa-paciente {
    display: flex;
    width: 100%;
    height: max-content;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #E0E4EC;
    align-items: center;
    justify-content: space-between;
  }

  .foto-paciente img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .foto-nome{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .nome-paciente {
    color: #2C2929;
    font-size: 20px;
    font-weight: 700;
  }

  .paciente-info{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .paciente-ref {
    flex-direction: column;
    color: #555;
    font-size: 14px;
    font-weight: 500;
  }
  </style>