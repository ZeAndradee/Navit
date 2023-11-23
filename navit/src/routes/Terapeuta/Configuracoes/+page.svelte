<script>
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/Header.svelte"
    import SideBarMenuInicio from "$lib/Terapeuta/TerapeutaHome/SideBarMenu/SideBarMenuInicio.svelte"
    import Configuracoes from "$lib/Terapeuta/Configuracoes/configuracoes.svelte"
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio />
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
        position: relative;
        display: flex;
        height: 100vh;
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
        height: 100%;
        display: flex;
        
        margin-top: 32px;
        margin-bottom: 64px;
    }
</style>