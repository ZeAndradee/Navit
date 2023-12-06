<script>
    import TableProntuarios from "$lib/Terapeuta/Prontuarios/TableProntuarios/TableProntuarios.svelte";

    let tagvalue = ['Finalizado', 'Novo Pedido', 'Em Andamento', 'Finalizado', 'Em Andamento', 'Novo Pedido', 'Novo Pedido', 'Em Andamento', 'Finalizado'];
    let nomepacientes = ['Pedro Henrique', 'André Costa', 'Rafael Ferreira', 'Michel Tales', 'Amanda Stuart', 'Pedro Luís', 'Carlos Daniel', 'Ricardo Souza', 'Samuel Duque', 'Matheus Guilherme'];
    let datanascimento = ['20/09/2013', '15/07/1990', '30/11/1985', '05/06/1992', '12/12/1993', '22/02/1988', '01/01/2000', '25/05/1995', '10/10/1990'];
    let sessaopaciente = ['20/09/2013', '15/07/1990', '30/11/1985', '05/06/1992', '12/12/1993', '22/02/1988', '01/01/2000', '25/05/1995', '10/10/1990'];
    let ultattpaciente = ['20/09/2013', '15/07/1990', '30/11/1985', '05/06/1992', '12/12/1993', '22/02/1988', '01/01/2000', '25/05/1995', '10/10/1990'];
   
    let pacientes = nomepacientes.map((nomePaciente, index) => ({
        nomePaciente,
        dataNascimentoPaciente: datanascimento[index],
        tagValue: tagvalue[index]
    }));

</script>


<div class="card-tabela">
    <div class="header-table">
        <div class="txt-header-status">
            <span>Status</span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.14645 2.64645C3.34171 2.45118 3.65829 2.45118 3.85355 2.64645L5.85355 4.64645C6.04882 4.84171 6.04882 5.15829 5.85355 5.35355C5.65829 5.54882 5.34171 5.54882 5.14645 5.35355L4 4.20711V10C4 10.2761 3.77614 10.5 3.5 10.5C3.22386 10.5 3 10.2761 3 10V4.20711L1.85355 5.35355C1.65829 5.54882 1.34171 5.54882 1.14645 5.35355C0.951184 5.15829 0.951184 4.84171 1.14645 4.64645L3.14645 2.64645ZM8 8.79289V3C8 2.72386 8.22386 2.5 8.5 2.5C8.77614 2.5 9 2.72386 9 3V8.79289L10.1464 7.64645C10.3417 7.45118 10.6583 7.45118 10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L8.85355 10.3536C8.75979 10.4473 8.63261 10.5 8.5 10.5C8.36739 10.5 8.24021 10.4473 8.14645 10.3536L6.14645 8.35355C5.95118 8.15829 5.95118 7.84171 6.14645 7.64645C6.34171 7.45118 6.65829 7.45118 6.85355 7.64645L8 8.79289Z" fill="#666666"/>
            </svg>
        </div>
        <div class="txt-header-nomepaciente">
            <span>Nome Paciente</span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.14645 2.64645C3.34171 2.45118 3.65829 2.45118 3.85355 2.64645L5.85355 4.64645C6.04882 4.84171 6.04882 5.15829 5.85355 5.35355C5.65829 5.54882 5.34171 5.54882 5.14645 5.35355L4 4.20711V10C4 10.2761 3.77614 10.5 3.5 10.5C3.22386 10.5 3 10.2761 3 10V4.20711L1.85355 5.35355C1.65829 5.54882 1.34171 5.54882 1.14645 5.35355C0.951184 5.15829 0.951184 4.84171 1.14645 4.64645L3.14645 2.64645ZM8 8.79289V3C8 2.72386 8.22386 2.5 8.5 2.5C8.77614 2.5 9 2.72386 9 3V8.79289L10.1464 7.64645C10.3417 7.45118 10.6583 7.45118 10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L8.85355 10.3536C8.75979 10.4473 8.63261 10.5 8.5 10.5C8.36739 10.5 8.24021 10.4473 8.14645 10.3536L6.14645 8.35355C5.95118 8.15829 5.95118 7.84171 6.14645 7.64645C6.34171 7.45118 6.65829 7.45118 6.85355 7.64645L8 8.79289Z" fill="#666666"/>
            </svg>
        </div>
        <div class="txt-header-datanascimento">
            <span>Data de Nascimento</span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.14645 2.64645C3.34171 2.45118 3.65829 2.45118 3.85355 2.64645L5.85355 4.64645C6.04882 4.84171 6.04882 5.15829 5.85355 5.35355C5.65829 5.54882 5.34171 5.54882 5.14645 5.35355L4 4.20711V10C4 10.2761 3.77614 10.5 3.5 10.5C3.22386 10.5 3 10.2761 3 10V4.20711L1.85355 5.35355C1.65829 5.54882 1.34171 5.54882 1.14645 5.35355C0.951184 5.15829 0.951184 4.84171 1.14645 4.64645L3.14645 2.64645ZM8 8.79289V3C8 2.72386 8.22386 2.5 8.5 2.5C8.77614 2.5 9 2.72386 9 3V8.79289L10.1464 7.64645C10.3417 7.45118 10.6583 7.45118 10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L8.85355 10.3536C8.75979 10.4473 8.63261 10.5 8.5 10.5C8.36739 10.5 8.24021 10.4473 8.14645 10.3536L6.14645 8.35355C5.95118 8.15829 5.95118 7.84171 6.14645 7.64645C6.34171 7.45118 6.65829 7.45118 6.85355 7.64645L8 8.79289Z" fill="#666666"/>
            </svg>
        </div>
        <div class="txt-header-sessao">
            <span>Sessão</span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.14645 2.64645C3.34171 2.45118 3.65829 2.45118 3.85355 2.64645L5.85355 4.64645C6.04882 4.84171 6.04882 5.15829 5.85355 5.35355C5.65829 5.54882 5.34171 5.54882 5.14645 5.35355L4 4.20711V10C4 10.2761 3.77614 10.5 3.5 10.5C3.22386 10.5 3 10.2761 3 10V4.20711L1.85355 5.35355C1.65829 5.54882 1.34171 5.54882 1.14645 5.35355C0.951184 5.15829 0.951184 4.84171 1.14645 4.64645L3.14645 2.64645ZM8 8.79289V3C8 2.72386 8.22386 2.5 8.5 2.5C8.77614 2.5 9 2.72386 9 3V8.79289L10.1464 7.64645C10.3417 7.45118 10.6583 7.45118 10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L8.85355 10.3536C8.75979 10.4473 8.63261 10.5 8.5 10.5C8.36739 10.5 8.24021 10.4473 8.14645 10.3536L6.14645 8.35355C5.95118 8.15829 5.95118 7.84171 6.14645 7.64645C6.34171 7.45118 6.65829 7.45118 6.85355 7.64645L8 8.79289Z" fill="#666666"/>
            </svg>
        </div>
        <div class="txt-header-ult-att">
            <span>Última Atualização</span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.14645 2.64645C3.34171 2.45118 3.65829 2.45118 3.85355 2.64645L5.85355 4.64645C6.04882 4.84171 6.04882 5.15829 5.85355 5.35355C5.65829 5.54882 5.34171 5.54882 5.14645 5.35355L4 4.20711V10C4 10.2761 3.77614 10.5 3.5 10.5C3.22386 10.5 3 10.2761 3 10V4.20711L1.85355 5.35355C1.65829 5.54882 1.34171 5.54882 1.14645 5.35355C0.951184 5.15829 0.951184 4.84171 1.14645 4.64645L3.14645 2.64645ZM8 8.79289V3C8 2.72386 8.22386 2.5 8.5 2.5C8.77614 2.5 9 2.72386 9 3V8.79289L10.1464 7.64645C10.3417 7.45118 10.6583 7.45118 10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L8.85355 10.3536C8.75979 10.4473 8.63261 10.5 8.5 10.5C8.36739 10.5 8.24021 10.4473 8.14645 10.3536L6.14645 8.35355C5.95118 8.15829 5.95118 7.84171 6.14645 7.64645C6.34171 7.45118 6.65829 7.45118 6.85355 7.64645L8 8.79289Z" fill="#666666"/>
            </svg>
        </div>
        <div class="txt-header-btn">
            
        </div>
    </div>
    <div class="table">
        {#each pacientes as {nomePaciente, dataNascimentoPaciente,tagValue}}
            <TableProntuarios {tagValue} {nomePaciente} {dataNascimentoPaciente}/>
        {/each} 
    </div>
</div>

<style>
    .card-tabela{
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        width: 100%;
        max-height: 47vh;
        height: 100%;
        padding: 20px;
        background-color: white;
        border-radius: 8px;
        border: 1px solid #E0E4EC; 
    }

    .header-table{
        display: flex;
        flex-direction: row;
        height: max-content;
        justify-content: space-between;
        align-items: center;    
        position: sticky;
        top: 0;
        background-color: white; /* Defina a cor de fundo para que o conteúdo abaixo não apareça */
        z-index: 1;
    }
    .txt-header-status{
        display: flex;
        width: 112px;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        gap: 10px;
        padding-left: 5px;
    }
    .txt-header-nomepaciente{
        display: flex;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        gap: 10px;
        padding-left: 20px;
    }
    .txt-header-datanascimento{
        display: flex;
        width: min-content;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        gap: 10px;
    }
    .txt-header-sessao{
        display: flex;
        width: 112px;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        gap: 10px;
        padding-left: 18px;
    }
    .txt-header-ult-att{
        display: flex;
        flex-direction: row;
        width: min-content;
        font-size: 14px;
        align-items: center;
        gap: 10px;
    }
    .txt-header-btn{
        display: flex;
        width: 90px;
        flex-direction: row;
        font-size: 14px;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 813px){
        .txt-header-datanascimento{
            display: none;
        }
        .txt-header-sessao{
            display: none;
        }
    }
    @media (max-width: 630px){
        .txt-header-btn{
            display: none;
        }
    }
    @media (max-width: 571px){
        .txt-header-ult-att{
            display: none;
        }
    }
</style>