<script>
    let nomeTerapeuta = "Fábio Peixoto"
    let novosPacientes = "4"
    let emAndamento = "30"
    let concluido = "92"
    let totalPacientes = "122"
</script>


<div class="header-terapeuta">
    <div class="nome-terapeuta"><span>Olá, {nomeTerapeuta}</span></div>
    <div class="dados-terapeuta">
        <div class="card-dados">
            <div class="txt-dados"><span>{novosPacientes}</span></div>
            <div class="txt-sub"><span>Novos Pacientes</span></div>
        </div>
        <div class="card-dados">
            <div class="txt-dados"><span>{emAndamento}</span></div>
            <div class="txt-sub"><span>Em Andamento</span></div>
        </div>
        <div class="card-dados">
            <div class="txt-dados"><span>{concluido}</span></div>
            <div class="txt-sub"><span>Concluidos</span></div>
        </div>
        <div class="card-dados">
            <div class="txt-dados"><span>{totalPacientes}</span></div>
            <div class="txt-sub"><span>Total Pacientes</span></div>
        </div>
    </div>
</div>

<style>
    .header-terapeuta{
        display: flex;
        flex-direction: column;
    }

    .nome-terapeuta{
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
    }
    .dados-terapeuta{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 8px;
    }
    .card-dados{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 170px;
        height: max-content;
        padding: 10px 20px;
        background-color: white;
        border-radius: 8px;
        
        border: 1px solid #E0E4EC;
    }

    .txt-dados{
        font-size: 18px;
        font-weight: 700;
    }
    .txt-sub{
        font-size: 14px;
        font-weight: 400;
    }
</style>