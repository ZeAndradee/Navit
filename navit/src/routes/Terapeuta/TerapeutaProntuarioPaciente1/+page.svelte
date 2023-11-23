<script>
    import HeaderProntuario from "$lib/Terapeuta/Terapeuta-Prontuarios1/headerProntuarioPaciente/HeaderProntuario.svelte";
    import InfoPaciente from "$lib/Terapeuta/Terapeuta-Prontuarios1/infoPaciente/infoPaciente.svelte"
</script>
<div>
    <HeaderProntuario/>   
</div>
<div class="pacienteInfo">
    <InfoPaciente/> 
</div>

<style>
    .pacienteInfo{
        float: right;
        margin-right: 300px;
        margin-top: 100px;
    }
</style>
