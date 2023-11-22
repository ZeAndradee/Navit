<script>
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/Header.svelte"
    import SideBarMenuInicio from "$lib/Terapeuta/TerapeutaHome/SideBarMenu/SideBarMenuInicio.svelte"
    import EstatisticasDiarias from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/EstatisticasDiarias.svelte"
    import GraficoCliques from "$lib/Terapeuta/TerapeutaHome/GraficosCliques/GraficoCliques.svelte"
    import ListaPacientes from "$lib/Terapeuta/TerapeutaHome/ListaPacientess/ListaPacientes.svelte"
    import GraficoComportamento from "$lib/Terapeuta/TerapeutaHome/GraficoComportamento/GraficoComportamento.svelte"
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
            <div class="row-inferior">
                <div class="lista-pacientes">
                    <ListaPacientes/>
                </div>
                <div class="grafico-comportamento">
                    <GraficoComportamento />
                </div>
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
    .row-inferior{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row; 
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

    .lista-pacientes{
        position: relative;
        display: flex;

    }

    .grafico-comportamento{
        margin-left: auto;
        position: relative;
        display: flex;
        margin-right: 43px;
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
    
    @media (max-width: 1493px){
        .row-inferior{
            flex-direction: column;
        }
        .grafico-comportamento{
            margin-left: 0;
        }
    }
</style>