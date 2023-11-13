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
    <SearchCase />
</div>

<div>
    <EstatisticasDiarias />
</div>

<div class="div">
    
</div>





<style>
   .div{
        width: 15px;
        height: 15px;
        background-color: black;
        margin-left: 500px;
   }
            
</style>