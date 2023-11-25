<script>
    import SideBarMenuInicio from "$lib/Terapeuta/TerapeutaHome/SideBarMenu/SideBarMenuInicio.svelte"
    import HeaderProntuario from "$lib/Terapeuta/Terapeuta-Prontuarios1/headerProntuarioPaciente/HeaderProntuario.svelte";
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="prontuario" />
    </div>

    <div class="prontuarios">
        <HeaderProntuario />
    </div>
</div>

<style>
    .row{
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .sidebar{
    position: relative;
    display: flex;
    height: 100vh;
    margin-right: 10px;
        
    }    
</style>