<script>
    //Variaveis do Grafico
        var NovoSP = 20;
        var AndamentoSP = 54;
        var FinalizadoSP = 26;
    </script>
    
    <!-- Renderizar o elemento canvas -->
    <div class="card3">
      <div class="box-hoje">
        <span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span>
      </div>
        <div class="legenda">
          <div class="leg1"><div class="bola"></div> <span style="margin-left: 12px; color: black">Parque</span> <span style="margin-left: auto; color: black">{NovoSP}% <span style="color: #52C93F; font-weight:700">↑</span></span></div>
          <div class="leg1"><div class="bola" style="background-color: #006AFF;"></div> <span style="margin-left: 12px; color: black">Comida</span> <span style="margin-left: auto; color: black">{AndamentoSP}% <span style="color: #52C93F; font-weight:700">↑</span></span></div>
          <div class="leg1"><div class="bola" style="background-color: #FF2727;"></div> <span style="margin-left: 12px; color: black">Brincar</span> <span style="margin-left: auto; color: black">{FinalizadoSP}% <span style="color: #FF2727; font-weight:700">↓</span></span></div>
        </div>
    </div>
    
    <style>
      .box-hoje{
        margin-left: 140px;
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
      .card3{
        display: flex;
        width: 274px;
        height: max-content;
        margin-left: 8%;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background: white;
        height: 233px;
      }
    
      .legenda{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
        font-size: 14px;
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
    </style>