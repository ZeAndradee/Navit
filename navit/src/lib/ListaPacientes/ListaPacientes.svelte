<script>
    
    let pacientes = [
      { numero: '01', nome: 'Pedro Henrique', imagemSrc: 'https://drive.google.com/uc?id=1Z3SpFceQM2uvVxXK5ZikrHf4KSn-jc3A' },
      { numero: '02', nome: 'Renata Silva', imagemSrc: 'https://drive.google.com/uc?id=1-hZFAUywbOvU0nw7U-R4al5Qth03GkMA' },
      { numero: '03', nome: 'André Costa', imagemSrc: 'https://drive.google.com/uc?id=1xk33fG6J2acHsBe-n-USax0VY-jN_www' },
      { numero: '04', nome: 'Rafael Ferreira', imagemSrc: 'https://drive.google.com/uc?id=1hfE8cd9byMbgMxLL497iBti0xrQyu2Lq' },
      { numero: '05', nome: 'Pedro Luís', imagemSrc: 'https://drive.google.com/uc?id=1MfK-6a7qkVQ_voIsqrcjSoGiNWM74qeu' },
      { numero: '06', nome: 'Carlos Daniel', imagemSrc: 'https://drive.google.com/uc?id=1dvlHIS7WTK2eYSsj4XhmjtT8pqIhEwan' },
      { numero: '07', nome: 'Ricardo Souza', imagemSrc: 'https://drive.google.com/uc?id=1pKFFbEuabwq678vvIP16bOPRwLb1N1sh' },
      { numero: '08', nome: 'Michel Tales', imagemSrc: 'https://drive.google.com/uc?id=1JWJI37e7e99QDqJEiitkFxUsiurDNygz' },
    ];
  </script>
  
  <style>
    body {
      margin: 0;
      height: 100vh;
      width: 100vw;
      background: #F4F5F7;
    }
  
    .container {
      display: flex;
      width: 384px;
      padding: 20px;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 11px;
      background: #FFF;
      margin-left: 39%;
      margin-top: 46%;
      max-height: 80vh;
      overflow-y: auto;
    }
  
    .header {
      width: 77px;
      height: 24px;
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
  
    .paciente {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid rgba(163, 163, 163, 0.25);
      gap: 37px;
      width: 100%;
      margin-bottom: 8px; /* Ajuste de distância entre os pacientes */
    }
  
    .numero {
      color: var(--Black, #1A1919);
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 133.333%;
    }
  
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    .imagem {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      border: 1px solid #F8F7F1;
    }
  
    .nome {
      flex-grow: 1;
      color: var(--Black, #1A1919);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: 8px; /* Ajuste de distância entre o nome e o retângulo */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  
    .retangulo {
      display: flex;
      padding: 4px 16px;
      align-items: flex-start;
      gap: 8px;
      background-color: blue;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: var(--Primaria, #2F85FE);
    }
  
    .detalhes-text {
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
  </style>
 <body>
  <div class="container">
    <div class="header">Pacientes</div>
    {#each pacientes as paciente (paciente.numero)}
      <div class="paciente">
        <div class="numero">{paciente.numero}</div>
        <div class="info">
          <img class="imagem" src="{paciente.imagemSrc}" alt="Imagem do Paciente" />
          <div class="nome">{paciente.nome}</div>
          <div class="retangulo">
            <div class="detalhes-text">Detalhes</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</body> 