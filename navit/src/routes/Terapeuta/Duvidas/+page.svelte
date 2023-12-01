<script>
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte";
    import Duvidas from "$lib/Terapeuta/Duvidas/Duvidas.svelte";
    import { onMount } from "svelte";

    onMount(() => {
    document.title = 'Configurações';
  });
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="duvidas" />
    </div>
    <div class="sidebarr">
        <SideBarMenuInicio selectedButton="duvidas" />
    </div>
<div class="column">
        <div class="header">
            <div class="search-case">
                <Header />
            </div>
        </div>
        <div class="duvidas">
            <Duvidas />
        </div>
    </div>
        
</div>

<style>

    .duvidas{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
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
        position: fixed;
        display: flex;
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