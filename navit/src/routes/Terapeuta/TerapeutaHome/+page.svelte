<script>
    import SearchCase from "$lib/SearchCase/SearchCase.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenuInicio.svelte";
    import GraficoRadar from "$lib/GraficoRadar/PosicionarGrafico.svelte"
    import EstatisticasDiarias from "$lib/EstatisticasDiarias/EstatisticasDiarias.svelte";
</script>

    <div>
        <SideBarMenuInicio />
    </div>

    <div>
        <EstatisticasDiarias />
    </div>
    
    <div class="search-Box"> 
        <SearchCase />
    </div>

    <div>
        <GraficoRadar/>
    </div>

<style>
   .search-Box{
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
        }
            
</style>