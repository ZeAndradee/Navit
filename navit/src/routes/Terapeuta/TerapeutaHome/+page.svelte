<script>
    // @ts-ignore
    import EstatisticasDiarias from "$lib/EstatisticasDiarias/EstatisticasDiarias.svelte";
    // @ts-ignore
    import SearchCase from "$lib/SearchCase/SearchCase.svelte";
    // @ts-ignore
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenuInicio.svelte";
    // @ts-ignore
    import ListaPacientes from "$lib/ListaPacientes/ListaPacientes.svelte";
</script>

<div class="flex flex-row h-screen bg-background"  >
    <div>
        <SideBarMenuInicio />
    </div>
    
    <div> 
        <SearchCase />
    </div>
</div>
    <div class="mb-1200">
        <ListaPacientes />
    </div> 

