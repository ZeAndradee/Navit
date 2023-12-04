<div class="card-paciente-info">
    <div class="column">
        <div class="inner-row">
            <div class="txt-nome-paciente"><span>Pedro Henrique</span></div>
            <div class="tag-filtro">
                <div><span class="txt-status">Ativo</span></div>
            </div>
        </div>
    </div>
</div>

<style>
    .card-paciente-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        background-color: white;
        border-radius: 8px;
        justify-content: space-between;
        border: 1px solid #E0E4EC;
    }
    .column{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border:red 1px solid;
    }
    .inner-row{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: max-content;
        border:blue 1px solid;
    }

    .txt-nome-paciente{
        font-size: 18px;
        font-weight: 500;
        margin-right: auto;
    }
    .tag-filtro{
        display: flex;
        flex-direction: row;
        padding: 2px 10px;
        gap: 8px;
        background: rgba(21, 163, 9, 0.20);
        border-radius: 15px;
    }
    .txt-status{
        font-size: 13px;
        font-weight: 600;
        color: #15A309;
    }
</style>