<script>
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte"
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte"
    import EstatisticasDiarias from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/estatisticasdiarias.svelte"
    import GraficoCliques from "$lib/Terapeuta/TerapeutaHome/GraficosCliques/GraficoCliques.svelte"
    import ListaPacientes from "$lib/Terapeuta/TerapeutaHome/ListaPacientess/ListaPacientes.svelte"
    import GraficoComportamento from "$lib/Terapeuta/TerapeutaHome/GraficoComportamento/GraficoComportamento.svelte"
    import { onMount } from "svelte";

    onMount(() => {
    document.title = 'Página Inicial';
  });
</script>

    <div class="row">
        <div class="sidebar">
            <SideBarMenuInicio selectedButton="inicio" />
        </div>
        <div class="sidebarr">
            <SideBarMenuInicio selectedButton="inicio" />
        </div>

        <div class="estatisticas-diarias">
            <EstatisticasDiarias />
        </div>
        
        <div class="column">
            <div class="header">
                <div class="search-case">
                    <Header />
                </div>
            </div>
            <div class="intern-column">
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
    </div>
    
<style>
    
    .row{
        display: flex;
        flex-direction: row;
        height: 100%;
        }

    .column{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .row-inferior{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-top: 15px;
        gap: 4%;
        justify-content: center;
    }    

    .intern-column{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 44px 48px 0px 0px;
    }

    .sidebar{
        display: flex;
        position: fixed;
        height: 100vh;
        margin-right: 10px;
        
    }

    .sidebarr{ /*Apenas para dar o espacamento*/
        display: flex;
        height: 100vh;
        margin-right: 10px;
        
    }
    .estatisticas-diarias{
        display: flex;
        height: 100%;
        width: max-content;
    }

    .lista-pacientes{
        display: flex;
    }

    .grafico-comportamento{
        display: flex;
        width: 35%;
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

    @media(max-width: 1366px){
        .row-inferior{
            flex-wrap: wrap;
            justify-content: center;
        }
        .lista-pacientes{
            justify-content: center;
        }
        .grafico-comportamento{ 
            justify-content: center;
            margin-top: 15px;
        }
    }
    @media(max-width: 1348px){
        .grafico-comportamento{ 
            justify-content: center;
            width: 70%;
        } 
    }
</style>