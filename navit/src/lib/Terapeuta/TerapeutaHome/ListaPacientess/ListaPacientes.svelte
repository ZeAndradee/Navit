<script>
    let pacientes = ['Adenair Ribeiro', 'Cleber Pinheiro', 'Vilma Nair', 'Edivaldo Pereira', 'Everton Sorriso', 'Cláudia Machado', 'Pedro Silveira'];
</script>

<div class="card-pacientes">
    <span style="font-weight:600">Pacientes</span>
    <ul>
        {#each pacientes as paciente, i}
        <li>
            <div class="paciente">
                <div class="right-num">{(i + 1).toString().padStart(2, '0')}</div>
                <div style="display: flex; flex-direction:row; gap:12px"> 
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle cx="13" cy="13" r="12.5" fill="#F8F7F1"/>
                        <circle cx="13" cy="13" r="12.5" fill="url(#pattern0)"/>
                        <circle cx="13" cy="13" r="12.5" stroke="#F8F7F1"/>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_10_393" transform="translate(-0.00104384) scale(0.00208768)"/>
                        </pattern>
                        </defs>
                        </svg>
                        <div >{paciente}</div>
                </div>

                <div style="margin-left: auto;">
                    <button class="btn-paciente">
                        <label for="button" style="color: white; font-weight:400">Detalhes</label>
                    </button>
                </div>
            </div>
        </li>
        {/each}
    </ul>
</div>

<style>

    .right-num{
        margin-right: 32px;
        font-size: 12px;
    }

    .card-pacientes{
        display: flex;
        flex-direction: column;
        width: 384px;
        background-color: white;
        padding: 20px;
        margin-left: 28px;
        margin-top: 28px;
        border-radius: 10px;
        margin-bottom: 18px;
    }

    .paciente{
        height: 56px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px solid #A3A3A340;
    }

    .btn-paciente{
        display: flex;
        padding: 4px 16px;
        background-color: #2F85FE;
        border-radius: 4px;
    }
</style>