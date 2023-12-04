<script>
    let totalPacientesAtivos = "11";
    let totalPacientesAtentidos = "3";
    let totalPacientesAAtender = "8";
</script>

<div class="paciente-prontuario-info">
    <div class="txt-header-prontuarios">
        <span>Seus Prontuários</span>
    </div>
    <div class="cards">
        <div class="card-data-prontuario">
            <div class="txt-dados"><span>{totalPacientesAtivos}</span></div>
            <div class="txt-sub"><span>Total de Pacientes Ativos</span></div>
        </div>
        <div class="card-data-prontuario">
            <div class="txt-dados"><span>{totalPacientesAtentidos}</span></div>
            <div class="txt-sub"><span>Total de Pacientes Ativos</span></div>
        </div>
        <div class="card-data-prontuario">
            <div class="txt-dados"><span>{totalPacientesAAtender}</span></div>
            <div class="txt-sub"><span>Total de Pacientes Ativos</span></div>
        </div>
    </div>
</div>

<style>

    
    .paciente-prontuario-info{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 33px;
        align-items: center;

    }
    
    .txt-header-prontuarios{
        font-size: 20px;
        font-weight: 700;
        margin-right: 20px;
    }
    .cards{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 8px;
    }

    .card-data-prontuario{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 250px;
        height: max-content;
        padding: 10px 20px;
        background-color: white;
        border-radius: 8px;
        gap: 8px;
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