<script>
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte";
    import Configuracoes from "$lib/Terapeuta/Configuracoes/configuracoes.svelte";
    import { onMount } from "svelte";

    onMount(() => {
    document.title = 'Configurações';
  });
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="configuracoes" />
    </div>
    <div class="sidebarr">
        <SideBarMenuInicio selectedButton="configuracoes" />
    </div>
    <div class="column">
            <div class="header">
                <div class="search-case">
                    <Header />
                </div>
            </div>
            <div class="configuracoes">
                <Configuracoes />
            </div>
    </div>
        
</div>

<style>
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

    .configuracoes{
        width: 100%;
        height: 100vh;
    }
</style>