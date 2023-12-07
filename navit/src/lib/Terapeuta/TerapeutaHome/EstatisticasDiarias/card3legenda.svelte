<script>
    //Variaveis do Grafico
        var NovoSP = 20;
        var AndamentoSP = 54;
        var FinalizadoSP = 26;
    </script>
    
    <!-- Renderizar o elemento canvas -->
    <div class="legenda">
        <div class="leg1">
            <div class="bola-btn">
              <div class="bola"></div>
              <span>Parque</span>
            </div>
            <div class="porc-seta">
              <span>{NovoSP}%</span>
              <span class="setacima">↑</span>
            </div>
        </div>
        <div class="leg1">
            <div class="bola-btn">
              <div class="bola" style="background-color: #006AFF;"></div>
              <span>Comida</span>
            </div>
            <div class="porc-seta">
              <span>{AndamentoSP}%</span>
              <span class="setacima">↑</span>
            </div>
        </div>
        <div class="leg1">
            <div class="bola-btn">
              <div class="bola" style="background-color: #FF2727;"></div>
              <span>Brincar</span>
            </div>
            <div class="porc-seta">
              <span>{FinalizadoSP}%</span>
              <span class="setabaixo">↓</span>
            </div>
        </div>
      
    </div>
    <style>
    
      .legenda{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 14px;
      }
    
      .leg1{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    
      .bola{
        height: 16px;
        width: 16px;
        background-color: #52C93F;
        border-radius: 50%;
      }

      .bola-btn{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }

      .porc-seta{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }

      .setacima{
        color: #52C93F;
        font-weight: 700;
      }
      .setabaixo{
        color: #FF2727;
        font-weight: 700;
      }
    </style>