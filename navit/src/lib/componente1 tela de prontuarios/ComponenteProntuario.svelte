<componente1>
    <div>
      <h1 class="Titulo">Bem Vindo, Lucas</h1>

    </div>
    <div class="container">
        
        <div class="box">
            <h3 class="subtitulo1">4</h3>
            <p class="Texto">Novos pacientes</p>
        </div>
        <div class="box">
            <h3 class="subtitulo2">30</h3>
            <p class="Texto1">Em andamento</p>
        </div>
        <div class="box">
            <h3 class="subtitulo3">92</h3>
            <p class="Texto2">Concluídos</p>
        </div>
        <div class="box">
            <h3 class="subtitulo4">122</h3>
            <p class="Texto3">Total de pacientes</p>
        </div>
    </div>
</componente1>
<style>
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px; 
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px; 
    height: 80px; 
    background-color: #f9f9f9; 
    border-radius: 8px;
    padding: 10px;
    margin: 0 10px;
    box-sizing: border-box;
    border: none; 
}


.subtitulo1,
.subtitulo2,
.subtitulo3,
.subtitulo4 {
    color: #333; 
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
}

.Texto,
.Texto1,
.Texto2,
.Texto3 {
    color: #666;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}
</style>
