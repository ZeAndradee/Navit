<script>
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/Header.svelte"
    import SideBarMenuInicio from "$lib/Terapeuta/TerapeutaHome/SideBarMenu/SideBarMenuInicio.svelte"
    import EstatisticasDiarias from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/EstatisticasDiarias.svelte"
    import GraficoCliques from "$lib/Terapeuta/TerapeutaHome/GraficosCliques/GraficoCliques.svelte"
    import ListaPacientes from "$lib/Terapeuta/TerapeutaHome/ListaPacientess/ListaPacientes.svelte"
</script>

    <div class="row">
        <div class="sidebar">
            <SideBarMenuInicio />
        </div>

        <div class="estatisticas">
            <EstatisticasDiarias />
        </div>
        
        <div class="column">
            <div class="header">
                <div class="search-case">
                    <Header />
                </div>
            </div>
            <div class="grafico-cliques">
                <GraficoCliques />
            </div>
            <div class="lista-pacientes">
                <ListaPacientes/>
            </div>
        </div>
    </div>
    


<style>
    
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
    .estatisticas{
        height: 100vh;
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