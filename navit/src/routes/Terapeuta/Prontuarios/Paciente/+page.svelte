<script>
// @ts-nocheck
    import InfoPaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/infoPaciente/infoPaciente.svelte";
    import Header from "$lib/Terapeuta/TerapeutaHome/Header/header.svelte";
    import Headerpaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/headerPaciente/headerpaciente.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte";
    import Card1 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card1.svelte";
    import Card2 from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card2.svelte";
    import Card3slegenda from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3slegenda.svelte";
    import Card3legenda from "$lib/Terapeuta/TerapeutaHome/EstatisticasDiarias/card3legenda.svelte";
    import ListaSessoes from "$lib/Terapeuta/Terapeuta-Prontuarios2/ListaSessoes/ListaSessoes.svelte";
    import { onMount } from "svelte";
    
    let sessoes = Array(20).fill(); // Cria um array com 10 elementos


    onMount(() => {
    document.title = 'Paciente';
  });
</script>

<div class="row">
    <div class="sidebar">
        <SideBarMenuInicio selectedButton="prontuario" />
    </div>
    <div class="sidebarr">
        <SideBarMenuInicio selectedButton="prontuario" />
    </div>
    <div class="column">
            <div class="header">
                <div class="search-case">
                    <Header />
                </div>
            </div>
            <div class="inner-row">
                <div class="inner-column">
                    <div>
                        <Headerpaciente />
                    </div>
                    <div>
                        <InfoPaciente />
                    </div>
                    <div class="inner-row2">
                        <div><Card1/></div>
                        <div><Card2/></div>
                    </div>
                    <div class="inner-row2">
                        <div class="card-3">
                            <div class="grafico-txt">
                                <div class="txt-header-card"> 
                                    <span style="font-size: 18px; font-weight:500;">Botões Mais Utilizados</span>
                                </div>
                                <div><Card3slegenda/></div>
                            </div>
                            <div class="divider-line"></div>
                            <div class="card3legenda"><Card3legenda/></div>
                            
                        </div>
                    </div>
                </div>
                <div class="inner-column2">
                    <div class="lista-card">
                        <div class="header-lista"><span>Pedro Henrique</span></div>
                        <div class="lista">
                            {#each sessoes as _, index (index)}
                                <div>
                                    <ListaSessoes indexLista={(index + 1).toString().padStart(2, '0')} numeroSessao={index + 1} />
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>      
    </div>
</div>
        


<style>
    .inner-row{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    .lista-card{
        display: flex;
        flex-direction: column;
        width: 65%;
        height: max-content;
        padding: 20px;
        background-color: white;
        border: 1px solid #E0E4EC;
        border-radius: 10px;
    }
    .lista{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 74vh;
        overflow-y: auto;
        margin-top: 20px;
    }

    .header-lista{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        padding-top: 20px;
    }

    .inner-column{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 15px;
    }
    .inner-column2{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 0px 20px 0px 20px;
        gap: 15px;
        align-items: center;
    }

    .inner-row2{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .grafico-txt{
        display: flex;
        width: 310px;
        flex-direction: column;
    }

    .card-3{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: max-content;
        align-items: center;
        padding: 10px;
        justify-content: space-between;
        background-color: white;
        border: 1px solid #E0E4EC;
        border-radius: 10px;
    }

    .txt-header-card{
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .divider-line{
        width: 1px;
        height: 160px;
        background-color: #E0E4EC;
    }

    .card3legenda{
        display: flex;
        flex-direction: column;
        width: 35%;
        padding-right: 20px;
    }

    /* .box-hoje{
    width: 52px;
    height: 24px;
    border-radius: 2px;
    padding: 4px 8px;
    background: #F4F5F7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */

  @media(max-width: 1300px){
    .inner-row{
        flex-wrap: wrap;
    }
    .inner-column2{
        align-items: center;
    }
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