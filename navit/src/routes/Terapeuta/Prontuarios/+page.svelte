<script>
    import { onMount } from "svelte";
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte";
    import HeaderTerapeuta from "$lib/Terapeuta/Prontuarios/HeaderTerapeuta/HeaderTerapeuta.svelte";
    import PacienteProntuarioInfo from "$lib/Terapeuta/Prontuarios/PacientesInfo/PacientesInfo.svelte";
    import SearchBar from "$lib/Terapeuta/Prontuarios/SearchBar/SearchBar.svelte";
    import PacienteInfo from "$lib/Terapeuta/Prontuarios/PacienteProntuariosInfo/PacienteProntuariosInfo.svelte";
    import TableProntuarios from "$lib/Terapeuta/Prontuarios/TableProntuarios/TableProntuarios.svelte";
    
    onMount(() => {
    document.title = 'Prontuários - YouMe';
  });
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="prontuario" />
    </div>
    <div class="sidebarr">
        <SideBarMenuInicio selectedButton="prontuario" />
    </div>
    <div class="column">
            <div class="header">
                <div class="search-case">
                    <Header />
                </div>
            </div>
            <div class="prontuarios-column">
                <div class="header-terapeuta">
                    <HeaderTerapeuta />
                </div>
                <div class="divider-line"></div>
                <div class="inner-row">
                    <div class="inner-column">
                        <div class="paciente-prontuario-info">
                            <PacienteProntuarioInfo />
                        </div>
                        <div class="search">
                            <SearchBar />
                        </div>
                        <div class="prontuarios">
                            <TableProntuarios />
                        </div>
                    </div>
                    <div class="info-paciente">
                       <PacienteInfo />
                    </div>
                </div>
            </div>    
    </div>

</div>

<style>

    .prontuarios-column{
        display: flex;
        flex-direction: column;
        margin-top: 28px;
        margin-left: 20px;
        margin-right: 50px;
        height: 100%;
    }

    .divider-line{
        border-bottom: 1px solid #E0E4EC;
        margin-top: 35px;
    }

    .inner-row{
        display: flex;
        flex-direction: row;
        padding-bottom: 15px;
        margin-top: 30px;
        height: 100%;
        justify-content: space-between;
    }
    .inner-column{
        display: flex;
        flex-direction: column;
    }

    .info-paciente{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: max-content;
        align-items: end;
    }

    .prontuarios{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        height: 100%;
        width: 100%;
    }

    /* Inicio Elementos Padrão */
    .row{
        display: flex;
        flex-direction: row;
        height: 100%;
        }

    .column{
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .sidebar{
        display: flex;
        position: fixed;
        height: 100vh;
    }
    .sidebarr{ /*Apenas para dar o espacamento*/
        display: flex;
        height: 100vh;
        margin-right: 10px;
    }

    .header{
        position: relative;
        display: flex;
        margin-left: 28px;
        margin-top: 28px;
        flex-direction: row;
        margin-top: 28px;
    }
    .search-case{
        position: relative;
        width: 100%;
        margin-left: auto;
    }
/* Fim Elementos Padrão*/
</style>