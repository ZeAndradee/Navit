<script>
    import header from "$lib/Terapeuta/TerapeutaHome/Header/Header.svelte"
    import SideBarMenuInicio from "$lib/Terapeuta/TerapeutaHome/SideBarMenu/SideBarMenuInicio.svelte";
    import EstatisticasDiarias from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/EstatisticasDiarias.svelte"
    import GraficoCliques from "$lib/Terapeuta/TerapeutaHome/GraficosCliques/GraficoCliques.svelte"
</script>
<div class="caixa">
    <div class="row">
        <div class="sidebar">
            <SideBarMenuInicio />
        </div>

        <div class="estatisticas">
            <EstatisticasDiarias />
        </div>
        
    </div>
    
    <div class="column">
        <div class="header">
            <div class="search-case">
                <header />
            </div>
        </div>
        <div class="grafico-cliques">
            <GraficoCliques />
        </div>
    </div>
</div>

<style>
    .caixa{
        display: flex;
        width: 100%;
        
    }
    .row{
        display: flex;
        flex-direction: row;
        
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
    }
    .estatisticas{
        position: relative;
        display: flex;
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
    }

    .grafico-cliques{
        position: relative;
        display: flex;
        
    }
    
</style>