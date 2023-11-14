<script>
    import SearchCase from "$lib/SearchCase/SearchCase.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenuInicio.svelte";
    import GraficoRadar from "$lib/GraficoRadar/PosicionarGrafico.svelte"
    import EstatisticasDiarias from "$lib/EstatisticasDiarias/EstatisticasDiarias.svelte";
</script>
<div class="container">
    <div>
        <div class="sidebar">
            <SideBarMenuInicio />
        </div>
        <div class="estatisticas">
            <EstatisticasDiarias />
        </div>
    </div>
    
    <div class="header">
        <div class="search-case"> 
            <SearchCase />
        </div>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
    .header{
        position: relative;
        display: flex;
        margin-left: 28px;
        margin-top: 28px;
        flex-direction: row;
        width: 100%;
        margin-top: 28px;
    }
    .search-case{
        position: relative;
    }
    
</style>