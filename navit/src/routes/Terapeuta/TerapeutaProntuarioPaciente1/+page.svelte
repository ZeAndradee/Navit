<script>
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte"
    import HeaderProntuario from "$lib/Terapeuta/Terapeuta-Prontuarios1/headerProntuarioPaciente/HeaderProntuario.svelte";
    import { onMount } from "svelte";

    onMount(() => {
    document.title = 'Prontuários Pacientes';
  });
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="prontuario" />
    </div>
    <div class="sidebarr">
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
    position: fixed;
    display: flex;
    height: 100vh;
    margin-right: 10px;
        
    }   
    
    .sidebarr{ /*Apenas para dar o espacamento*/
        display: flex;
        height: 100vh;
        margin-right: 10px;
        
    }
</style>