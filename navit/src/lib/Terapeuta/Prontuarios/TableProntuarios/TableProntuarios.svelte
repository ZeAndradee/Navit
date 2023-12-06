<script>
// @ts-nocheck

    export let tagValue = "Concluído";
    export let nomePaciente = "Pedro Henrique";
    export let dataNascimentoPaciente = "20/09/2013";
    export let sessaoPaciente = "1";
    export let ultAttPaciente = "30/11/23 09:45";

    function getColorClass(tagValue) {
        if (tagValue === "Novo Pedido") {
            return ['green', 'greenn'];
        } else if (tagValue === "Em Andamento") {
            return ['blue', 'bluee'];
        } else if (tagValue === "Concluído") {
            return ['red', 'redd'];
        }
    }

    let [textColor, bgColor] = getColorClass(tagValue);
</script>

<div class="card-table-pacientes">
    <div class="row">
        <div class="space">
            <div class="tag-filtro {bgColor}">
                <span class="txt-status {textColor}">{tagValue}</span>
            </div>
        </div>
        <div class="txt-info-paciente-nome">
            <span>{nomePaciente}</span>
        </div>
        <div class="txt-info-paciente-data-nasc">
            <span>{dataNascimentoPaciente}</span>
        </div>
        <div class="txt-info-paciente-sessao">
            <span>Sessão {sessaoPaciente}</span>
        </div>
        <div class="txt-info-paciente-ult-att">
            <span>{ultAttPaciente}</span>
        </div>
        <div>
            <button class="btn-show">Exibir</button>
        </div>
    </div>
</div>

<style>
    .card-table-pacientes{
        width: 100%;
        height: max-content;
        padding: 5px;
        border-bottom: 1px solid #E0E4EC;
    }

    .row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center ;
        width: 100%;
        height: max-content;
    }
    .space{
        width: 112px;
    }
    .tag-filtro{
        display: flex;
        width: max-content;
        flex-direction: row;
        padding: 2px 10px;
        gap: 8px;
        background: rgba(21, 163, 9, 0.20);
        border-radius: 15px;
    }
    .txt-status{
        font-size: 12px;
        font-weight: 600;
        color: #15A309;
    }
    .tag-filtro span.green {
        color: #15A309;
    }
    .tag-filtro span.blue{
        color: #2F85FE;
    }
    .tag-filtro span.red{
        color: #CE0606;
    }
    .tag-filtro.greenn{
        background-color: #15A30933;
    }
    .tag-filtro.bluee{
        background-color: #3086FE33;
    }
    .tag-filtro.redd{
        background-color: #CE060633;
    }
    .txt-info-paciente-nome{
        width: 110px;
        font-size: 13px;
        font-weight: 500;
    }
    .txt-info-paciente-data-nasc{
        width: 110px;
        font-size: 13px;
        font-weight: 500;
    }
    .txt-info-paciente-sessao{
        width: 80px;
        font-size: 13px;
        font-weight: 500;
    }
    
    .txt-info-paciente-ult-att{
        width: 105px;
        font-size: 13px;
        font-weight: 500;
    }
    .btn-show{
        color: white;
        padding: 4px 14px;
        align-items: center;
        border-radius: 12px;
        background: #006AFF;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
    }
</style>