<script>
    import TableProntuarios from "$lib/Terapeuta/Prontuarios/TableProntuarios/TableProntuarios.svelte";

    let tagvalue = ['Concluído', 'Novo Pedido', 'Em Andamento', 'Concluído', 'Em Andamento', 'Novo Pedido', 'Novo Pedido', 'Em Andamento', 'Concluído'];
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
    {#each pacientes as {nomePaciente, dataNascimentoPaciente,tagValue}}
        <TableProntuarios {tagValue} {nomePaciente} {dataNascimentoPaciente}/>
    {/each} 
</div>

<style>
    .card-tabela{
        overflow-y: auto;
        width: 100%;
        max-height: 40vh;
        height: 100%;
        padding: 20px;
        background-color: white;
        border-radius: 8px;
        border: 1px solid #E0E4EC; 
    }
</style>