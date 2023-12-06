<script>
    import InfoPaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/infoPaci/infopaci.svelte";
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte";
    import Headerpaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/headerPaciente/headerpaciente.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte";
    import Card1 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card1.svelte";
    import Card2 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card2.svelte";
    import Card3slegenda from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3slegenda.svelte";
    import Card3legenda from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3legenda.svelte";
    import ListaSessoes from "$lib/Terapeuta/Terapeuta-Prontuarios2/ListaSessoes/ListaSessoes.svelte";
    import { onMount } from "svelte";
    

    onMount(() => {
    document.title = 'Paciente';
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
            <div class="inner-row">
                <div class="inner-column">
                    <div>
                        <Headerpaciente />
                    </div>
                    <div>
                        <InfoPaciente />
                    </div>
                </div>
                <div class="inner-column">

                </div>
            </div>      
    </div>
</div>
        


<style>
    .inner-row{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        padding: 20px;
        border: red solid 1px;
    }

    .inner-column{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border: blue solid 1px;
    }

    /* Inicio Elementos Padrão*/
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