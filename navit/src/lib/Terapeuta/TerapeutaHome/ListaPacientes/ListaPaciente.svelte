<div class="card-lista-pacientes">
    <span style="font-weight:600">Pacientes</span>
    <ul>
        <div class="card-paciente">
            <li><span style="color: #1A1919; margin-right:auto">01</span><span class="nome-paciente">Pedro Henrique</span> <button class="btn-paciente"><label for="button" style="color: white; font-weight:400">Detalhes</label></button></li>
        </div>
    </ul>
</div>

<style>
    .card-lista-pacientes{
        padding: 20px;
        margin-left: 28px;
        margin-top: 28px;
        width: 384px;
        height: 100vh;
        border-radius: 10px;
        background-color: white;
    }

    .card-paciente{
        width: 100%;
        display: flex;
        flex-direction: row;
        border: red 1px solid;
        justify-content: center; /* Alinha os itens no centro */
        align-items: center;
    }


    .btn-paciente{
        width: 99px;
        height: 32px;
        padding: 4px 16px;
        background-color: #2F85FE;
        border-radius: 4px;
    }
</style>