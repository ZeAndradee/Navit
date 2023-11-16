<div class="card1">
    <div class="txt-header-card"> 
      <span style="font-size: 18px; font-weight:500;">Progresso Pacientes</span>
      <div class="box-hoje">
        <span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span>
      </div>
    </div>
    <div class="Skill-Progresso">
      <span style="color: black;font-size: 25px; font-weight: 700;">{SkillAprimorada}</span>
      <span style="color: #52C93F; font-weight:500; margin-left:auto; margin-top:auto; padding-bottom: 3%;">↑ {PorcentagemPP}%</span>
    </div>  
    <div class="comparado-ao">
      <div style="display: flex; flex-direction: row; font-size: 14px">
        <span style="">Comparado a <b style="color: #656575;">{SkillPassada}</b> de ontem</span>
      </div>
    </div>  
    <div class="tempo-semana">
      <span style="font-size: 14px; font-weight: 500">Última semana</span>
      <span style="margin-left: auto"><b style="font-size: 14px; font-weight: 600;">{SkillSemanaPassada}</b></span>
    </div>   
  </div>
  
<style>
    .card1{
    display: flex;
    width: 288px;
    height: 190px;
    margin-left: 8%;
    padding: 24px 24px 20px 22px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    border-radius: 10px;
    background: #FDFDFD;
  }

  .Skill-Progresso{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .tempo-semana{
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .box-hoje{
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


  .txt-header-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(163, 163, 163, 0.20);
  }
</style>

<script>
  var SkillAprimorada = "Comunicação"
  var PorcentagemPP = "2.5"
  var SkillPassada = "Motora"
  var SkillSemanaPassada = "Cognitivo"
</script>