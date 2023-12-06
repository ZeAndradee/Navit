<script>
// @ts-nocheck

    // Data e hora estatisticas diarias
  let dataAtual = new Date();
  let opcoesData = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  let opcoesHora = { hour: '2-digit', minute: '2-digit' };
  let dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesData);
  let horaFormatada = dataAtual.toLocaleTimeString('pt-BR', opcoesHora);

  function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let diaDaSemana = primeiraLetraMaiuscula(dataFormatada.split(',')[0]);
  diaDaSemana = diaDaSemana.replace('.', ''); // Remove o ponto
  let restoDaData = dataFormatada.split(',')[1];
  dataFormatada = `${diaDaSemana},${restoDaData} ${horaFormatada}`;
</script>

<div class="row">
    <div>
        <form action="" class="search-bar">
            <input type="text" placeholder="Descreva o seu problema" name="q" class="focus:ring-0" autocomplete="off">
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#656575" stroke-width="1.80206" stroke-linecap="round"/>
                </svg> 
            </button>
        </form>
    </div>
    <button>
        <span style="text-decoration: underline;">Filtrar</span>
    </button>
    <div class="tag-filtro">
        <div><span class="txt-status">Status: Todos</span></div>
        <button class="close-btn">x</button>
    </div>
    <div class="last-att">
        <span>Última Atualização: {dataFormatada}</span>
    </div>
</div>
<style>

    /*Inicio Search bar */
    .search-bar{
        display: flex;
        width: max-content;
        height: max-content;
        background: white;
        border-radius: 10px;
        outline: none;
        border: 1px solid #E0E4EC;
    }

    .search-bar button{
        padding: 5px;
    }
    input{
        background: transparent;
        border: none;
        outline: none;
        font-family: "Inter", Arial, sans-serif;
    }

    /*Fim Search bar */

    .row{
        display: flex;
        margin-top: 30px;
        flex-direction: row;
        height: max-content;
        align-items: center;
        gap: 24px;
    }

    .tag-filtro{
        display: flex;
        flex-direction: row;
        padding: 2px 10px;
        gap: 8px;
        background: rgba(71, 211, 255, 0.29);
        border-radius: 15px;
        margin-right: auto;
    }

    .txt-status{
        font-size: 13px;
        font-weight: 600;
        color: #187897;
    }

    .close-btn{
        font-size: 11px;
        font-weight: 600;
    }
    .last-att{
        font-size: 13px;
        font-weight: 400;
    }
</style>