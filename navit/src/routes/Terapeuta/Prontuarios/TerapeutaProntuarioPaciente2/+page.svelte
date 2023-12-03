<script>
    import Infopaci from "$lib/Terapeuta/Terapeuta-Prontuarios2/infoPaci/infopaci.svelte";
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte";
    import Headerpaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/headerPaciente/headerpaciente.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte";
    import Card1 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card1.svelte";
    import Card2 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card2.svelte";
    import Card3slegenda from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3slegenda.svelte";
    import { onMount } from "svelte";
    

    onMount(() => {
    document.title = 'Nome da página';
  });
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="prontuarios" />
    </div>
    <div class="sidebarr">
        <SideBarMenuInicio selectedButton="prontuarios" />
    </div>
    <div class="column">
            <div class="header">
                <div class="search-case">
                    <Header />
                </div>
            </div>
            <div class="info">
                <div class="headerpaciente">
                    <Headerpaciente/>
                </div>
                <div class="infopaciente">
                    <Infopaci/>
                </div>
                <div class="juntinhos">
                    <div class="card1">
                        <Card1/>
                    </div>
                    <div class="card2">
                        <Card2/>
                    </div>
                </div>
                <div class="card3">
                    <Card3slegenda/>
                </div>
            </div>
            <div class="listaprontuario">

            </div>
            
    </div>
</div>
        


<style>

    .juntinhos{
        flex-direction: row;
        display: flex;
        gap: 35px;
        border:blue 1px solid;
    }
    .infopaciente{
        display: flex;
        margin-top: 17px;
    }
    .info{
        display: flex;
        flex-direction: column;
        margin-left: 60px;
        margin-top: 51px;
        border:red 1px solid;
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