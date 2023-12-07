<script>
  let idPaciente = 'q7h3dauolwft7qyi3kb5bbhn';
  let generoPaciente = 'Masculino';
  let primeiraSessaoPaciente = '15/05/2023';
  let dataNascimentoPaciente = '12/05/2013';
  let evolucaoPaciente = 'Boa';
  let ultimaSessaoPaciente = '20/10/2023';
</script>


<div class="container">
  <div class="inner-row">
    <div class="inner-column">
      <div class="title-txt"><span>ID</span></div>
      <div class="sub-txt-1"><span>{idPaciente}</span></div>
    </div>
    <div class="inner-column">
      <div class="title-txt"><span>Gênero</span></div>
      <div class="sub-txt-2"><span>{generoPaciente}</span></div>
    </div>
    <div class="inner-column">
      <div class="title-txt"><span>Primeira Sessão</span></div>
      <div class="sub-txt-3"><span>{primeiraSessaoPaciente}</span></div>
    </div>
  </div>
  <div class="inner-row" style="margin-top: 15px;">
    <div class="inner-column">
      <div class="title-txt"><span>Data de Nascimento</span></div>
      <div class="sub-txt-1"><span>{dataNascimentoPaciente}</span></div>
    </div>
    <div class="inner-column">
      <div class="title-txt"><span>Evolução</span></div>
      <div class="sub-txt-2"><span>{evolucaoPaciente}</span></div>
    </div>
    <div class="inner-column">
      <div class="title-txt"><span>Última Sessão</span></div>
      <div class="sub-txt-3"><span>{ultimaSessaoPaciente}</span></div>
    </div>
  </div>
</div>
  
  
  <style>
    .container {
      position: flex;
      width: 100%;
      height: max-content;
      padding: 15px;
      background-color: #FFFFFF;
      border-radius: 10px;
      border: 1px solid #E0E4EC;
    }

    .inner-row{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .inner-column{
      display: flex;
      flex-direction: column;
    }

    .title-txt{
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
    }
    .sub-txt-1{
      width: 210px;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
    }
    .sub-txt-2{
      width: 80px;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      
    }
    .sub-txt-3{
      width: 120px;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
    }
    
  </style>