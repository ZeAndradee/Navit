<script>
// @ts-nocheck

    // Row 1
    let dataNascimentoPaciente = "20/09/2013";
    let generoPaciente = "Masculino";
    let sessaoPaciente = "1";

    // Row 2
    let idPaciente = "h86c0wowtppsujuywq0v4q37";

    //Info Paciente Consulta
    let social = 8;
    let comportamento = 5;
    let fala = 1;
    let habilidadesMotoras = 7;

    //Funcao para mudar cor do texto
    function getColorClass(social,comportamento,fala,habilidadesMotoras) {
        if (social <= 3 || comportamento <= 3 || fala <= 3 || habilidadesMotoras <= 3) {
            return 'red';
        } else if (social <= 6 || comportamento <= 6 || fala <= 6 || habilidadesMotoras <= 6) {
            return 'orange';
        } else if (social >= 7 || comportamento >= 7 || fala >= 7 || habilidadesMotoras >= 7) {
            return 'green';
        }
    }
</script>

<div class="card-paciente-info">
    <div class="column">
        <div class="inner-row">
            <div class="txt-nome-paciente"><span>Pedro Henrique</span></div>
            <div class="tag-filtro">
                <div><span class="txt-status">Ativo</span></div>
            </div>
        </div>
        <div class="inner-column-info" style="margin-top: 24px">
            <div class="inner-row">
                <div class="column-info">
                    <div>
                        <div class="title-txt"><span>Nascimento:</span></div>
                        <div class="subtitle-txt"><span>{dataNascimentoPaciente}</span></div>
                    </div>
                </div>
                <div class="column-info">
                    <div>
                        <div class="title-txt"><span>Genero:</span></div>
                        <div class="subtitle-txt"><span>{generoPaciente}</span></div>
                    </div>
                </div>
                <div class="column-info">
                    <div>
                        <div class="title-txt"><span>Sessão:</span></div>
                        <div class="subtitle-txt"><span>Sessão: {sessaoPaciente}</span></div>
                    </div>
                </div>
            </div>
            <div class="inner-row">
                <div class="column-info">
                    <div>
                        <div class="title-txt"><span>ID:</span></div>
                        <div class="subtitle-txt"><span>{idPaciente}</span></div>
                    </div>
                </div>
            </div>

            <!-- Info Inferior -->
            <div class="inner-row2">
                <div class="left-column">
                    <div>
                        <div class="title-txt"><span>Social:</span></div>
                        <div class="subtitle-info-txt"><span class="{getColorClass(social)}">{social}/10</span></div>
                    </div>
                    <div>
                        <div class="title-txt"><span>Comportamento:</span></div>
                        <div class="subtitle-info-txt"><span class="{getColorClass(comportamento)}">{comportamento}/10</span></div>
                    </div>
                    <div>
                        <div class="title-txt"><span>Fala:</span></div>
                        <div class="subtitle-info-txt"><span class="{getColorClass(fala)}">{fala}/10</span></div>
                    </div>
                    <div>
                        <div class="title-txt"><span>Habilidades Motoras:</span></div>
                        <div class="subtitle-info-txt"><span class="{getColorClass(habilidadesMotoras)}">{habilidadesMotoras}/10</span></div>
                    </div>
                </div>
                <div class="right-column">
                    <div>
                        <div class="title-txt"><span>Evolução Social:</span></div>
                        <div class="subtitle-info-txt"><span class="orange">Pouco Significativa</span></div>
                    </div>
                    <div>
                        <div class="title-txt"><span>Evolução Comportamento:</span></div>
                        <div class="subtitle-info-txt"><span class="green">Esperado para atividade</span></div>
                    </div>
                    <div>
                        <div class="title-txt"><span>Evolução Verbal:</span></div>
                        <div class="subtitle-info-txt"><span class="red">Fala comprometida</span></div>
                    </div>
                    <div>
                        <div class="title-txt"><span>Evolução Motora:</span></div>
                        <div class="subtitle-info-txt"><span class="orange">Pouco Significativa</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="div-btn-expandir">
            <button class="btn-expandir">
                <span>Expandir</span>
            </button>
        </div>
        
    </div>
</div>

<style>
    .card-paciente-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 22vw;
        height: fit-content;
        padding: 25px 20px;
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
    }
    .inner-row{
        display: flex;
        flex-direction: row;
        gap: 5px;
        width: 100%;
        height: max-content;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .inner-row2{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: max-content;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .inner-column-info{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: max-content;
        gap: 22px;
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
    .title-txt{
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
    }
    .subtitle-txt{
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        word-wrap: break-word;
    }
    .left-column{
        display: flex;
        flex-direction: column;
        height: max-content;
        width: max-content;
        gap: 22px;
    }
    .right-column{
        display: flex;
        flex-direction: column;
        height: max-content;
        gap: 22px;
    }

    .subtitle-info-txt{
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        text-wrap: wrap;
    }
    .subtitle-info-txt span.red{
        color: #EE615B;
    }
    .subtitle-info-txt span.orange{
        color: #F28F35;
    }
    .subtitle-info-txt span.green{
        color: #15A309;
    }

    /* Botao Expandir */
    .div-btn-expandir{
        display: flex;
        width: 100%;
        height: 100%;
        padding: 45px 15px 15px 15px;
        justify-content: center;
        align-items: center;
    }

    .btn-expandir{
        display: flex;
        padding: 8px 60px;
        background-color: #006AFF;
        border-radius: 8px;
        justify-content: center;
        align-items: center;

        font-size: 17px;
        color: white;
        font-size: 18px;
        font-weight: 400;
    }

    @media (max-width: 1186px){
        .card-paciente-info{
            width: fit-content;
        }
}
</style>