<script>
    import Infopaci from "$lib/Terapeuta/Terapeuta-Prontuarios2/infoPaci/infopaci.svelte";
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte";
    import Headerpaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/headerPaciente/headerpaciente.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte";
    import Card1 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card1.svelte";
    import Card2 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card2.svelte";
    import Card3slegenda from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3slegenda.svelte";
    import Card3legenda from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3legenda.svelte";
    import { onMount } from "svelte";
    

    onMount(() => {
    document.title = 'Nome da página';
  });
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="prontuarios" />
    </div>
    <div class="sidebarr">
        <SideBarMenuInicio selectedButton="prontuarios" />
    </div>
    <div class="column">
            <div class="header">
                <div class="search-case">
                    <Header />
                </div>
            </div>
            <div class="info">
                <div class="headerpaciente">
                    <Headerpaciente/>
                </div>
                <div class="infopaciente">
                    <Infopaci/>
                </div>
                <div class="juntinhos">
                    <div class="card1">
                        <Card1/>
                    </div>
                    <div class="card2">
                        <Card2/>
                    </div>
                </div>
                <div class="card3">
                    <div class="grafico">
                        <Card3slegenda/>
                    </div>
                    <div class="decoracao"></div>
                    
                        <div class="legenda">
                            <Card3legenda/>
                        </div>
                        <div class="box-hoje">
                            <span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span>
                          </div>
                    
                </div>
            </div>
            <div class="listaprontuario">

            </div>
            
    </div>
</div>
        


<style>
    .grafico{
        border:blue 1px solid;
    }
    .decoracao{
    width: 1px;
    height: 206px;
    flex-shrink: 0;
    background: #D2D2D2;
    margin-right: 1cm;
    }
     .box-hoje{
        margin-left: -1cm;
        width: 52px;
        height: 24px;
        border-radius: 2px;
        padding: 4px 8px;
        background: #F4F5F7;
        display: flex;
        margin-bottom: 4cm;
       
      }
    .legenda{
        display: flex;
        border:blue 1px solid;
    }
    .card3{
        display: flex;
        width: 610px;
        height: 233px;
        align-items: center;
        flex-shrink: 0;
        border-radius: 8px;
        background: white;
        margin-top: 0.5cm;
    }
    .juntinhos{
        flex-direction: row;
        display: flex;
        gap: 35px;
        border:blue 1px solid;
    }
    .infopaciente{
        display: flex;
        margin-top: 17px;
    }
    .info{
        display: flex;
        flex-direction: column;
        margin-left: 60px;
        margin-top: 51px;
        border:red 1px solid;
    }
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
</style>