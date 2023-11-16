<link rel="stylesheet" href="https://fonts.google.com/specimen/Inter?query=inter">
<body>
  <div class ="caixa-paciente">
    <div class ="foto-paciente">
      <img src ="paciente-prontuario.jpg" alt="foto do paciente do prontuário correspondente">
    </div>
    <div>
    <p class = "nome-paciente">Joana Moreno</p>
    <p class = "paciente-ref">Paciente</p>
    </div>
    <div class = "svg">
      <svg xmlns="http://www.w3.org/2000/svg"
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none">
        <path d="M9 18C7.35 18 6 19.35 6 21C6 22.65 7.35 24 9 24C10.65 24 12 22.65 12 21C12 19.35 10.65 18 9 18ZM30 18C28.35 18 27 19.35 27 21C27 22.65 28.35 24 30 24C31.65 24 33 22.65 33 21C33 19.35 31.65 18 30 18ZM19.5 18C17.85 18 16.5 19.35 16.5 21C16.5 22.65 17.85 24 19.5 24C21.15 24 22.5 22.65 22.5 21C22.5 19.35 21.15 18 19.5 18Z" fill="#4B4B4B"/>
      </svg>
    </div>
  </div>

</body>

</html>

<style>
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
    font-family: 'Inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .paciente-ref {
    display: absolute;
    width: 144px;
    height: 11.402px;
    margin-top: -40px;
    margin-bottom: 5px;
    margin-left: 10px;
    flex-direction: column;
    flex-shrink: 0;
    color: #555;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .svg svg {
    display: absolute;
    margin-left: 309px;
    margin-top: 19px;
    margin-bottom: auto;
  }
  </style>