<script>
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap">
<div class="container">
  <div class="navbar">
    <div class="nome_paciente">
      Pedro Henrique
    </div>
    <div class="status">
      ativo
    </div>
  </div>
  <div class="lista_pacientes">
    <p class="titulo">Lista Prontuários</p>
    <ul class="lista">
      <div class="container_a">
          <p class="numeracao">01</p>
          <li class="sessao">Sessão 10</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_b">
          <p class="numeracao">02</p>
          <li class="sessao">Sessão 09</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_c">
          <p class="numeracao">03</p>
          <li class="sessao">Sessão 08</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_d">
          <p class="numeracao">04</p>
          <li class="sessao">Sessão 07</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_e">
          <p class="numeracao">05</p>
          <li class="sessao">Sessão 06</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_f">
          <p class="numeracao">06</p>
          <li class="sessao">Sessão 05</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_g">
          <p class="numeracao">07</p>
          <li class="sessao">Sessão 04</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_h">
          <p class="numeracao">08</p>
          <li class="sessao">Sessão 03</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_i">
          <p class="numeracao">09</p>
          <li class="sessao">Sessão 02</li>
          <button class="button">Detalhes</button>
        </div>
        <div class="container_j">
            <p class="numeracao">10</p>
            <li class="sessao">Sessão 01</li>
            <button class="button">Detalhes</button>
        </div>
      </div>
    </ul>
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 461px;
    height: 718px;
    border-radius: 10px;
    background: #FFFFFF;
    flex-wrap: wrap;
  }
  .navbar {
    height: 80px;
    width: 461px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nome_paciente {
    color: var(--Black, #151515);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 16px;
  }
  .status {
    display: flex;
    padding: 4px 8px;
    align-items: center;
    gap: 4px;
    border-radius: 10px;
    background: rgba(21, 163, 9, 0.2);
  }
  .lista_pacientes {
    position: relative;
    width: 444px;
    height: 598px;
    padding: 20px ;
    flex-direction: column;
    /* overflow-y: auto; */
    /* align-items: flex-start; */
    border-radius: 11px;
    background-color: #FFFFFF;
    /* position: sticky; */
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.1);
  }
  .titulo {
    color: var(--Black, #1a1919);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-top: -1px;
  }
  .lista{
    overflow: auto;
    height: 100%;
    max-height: calc(100% - 40px);
    scrollbar-width: auto;
    scrollbar-color: #c4bec5 #ffffff;
  }
  .lista::-webkit-scrollbar{
    width: 11px;
  }
  .lista::-webkit-scrollbar-track {
    background: #ffffff;
  }
  .lista::-webkit-scrollbar-thumb {
    background-color: #c4bec5;
    border-radius: 15px;
    border: 3px solid #ffffff;
  }
  .container_a , .container_b , .container_c, .container_d , .container_e, .container_f, .container_g, .container_h, .container_i, .container_j{
    align-items: center;
    background-color:#FFFFFF;
    display: flex;
    padding: 12px 0px;
    align-items: center;
    gap: 135px;
    margin-left: -40px;
  }
  .numeracao{
    display: flex;
    position: relative;
    float: left;
    /* width: 24px; */
    height: 16px;
    color: var(--Black, #1A1919);
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
    margin-right: 10px;
  }
  .sessao{
    display: flex;
    float: left;
    white-space: nowrap;
    width: 20px;
    color: var(--Black, #1A1919);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 480;
    line-height: normal;
    margin-left: -90px;
  }
  .button{
    width: 99px;
    height: 32px;
    display: flex;
    padding: 4px 16px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 10px;
    background: var(--Primaria, #2F85FE);
    border-color: white;
    font-size: 16px;
    text-align: center;
    margin-left: 90px;
    color:#FFFFFF;
  }
</style>