<script>
// @ts-nocheck

  export let indexLista;
  export let numeroSessao;
</script>

<div class="elemento-lista">
  <div class="num-sessao">
    <div class="indexlista">{indexLista}</div>
    <div>Sessão {numeroSessao}</div>
  </div>  
  <button class="btn-detalhes">Detalhes</button>
</div>

<style>
  .elemento-lista{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: max-content;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E0E4EC;
  }
  .num-sessao{
    display: flex;
    flex-direction: row;
    gap: 32px
  }

  .indexlista{
    display: flex;

    align-items: center;
    font-size: 12px;
  }
  .btn-detalhes{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 16px;
    border-radius: 4px;
    background-color: #006AFF;
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
</style>

