<script>
    // import SideBarMenuInicio from "$lib/Terapeuta/TerapeutaHome/SideBarMenu/SideBarMenuInicio.svelte";
    import SideBarMenuProntuario from "$lib/Terapeuta/TerapeutaHome/SideBarMenu/SideBarMenuProntuario.svelte";
    import Headerpaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/headerPaciente/headerpaciente.svelte";
    import InfoPaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/infoPaciente/infoPaciente.svelte";
    import Cardtemptela from "$lib/Terapeuta/Terapeuta-Prontuarios2/cardtempotela/cardtemptela.svelte";
    import Cardbotaoutilizado from "$lib/Terapeuta/Terapeuta-Prontuarios2/cardbotaoutilizado/cardbotaoutilizado.svelte";
</script>

<!-- <div class="sidebar">
    <SideBarMenuProntuario/>
</div> -->
<div class="caixa_centro">
    <div class="hp">
        <Headerpaciente/>
    </div>
    <div class="infop">
        <InfoPaciente/>
    </div>
    <div class="cardtempo">
        <Cardtemptela/>
    </div>

</div>
<!-- <Cardbotaoutilizado/> -->



<style>

.sidebar{
    width: 100vh;
}

.caixa_centro{
    align-items: center;
}

.hp{
    margin-left: 295px;
    margin-top: 126px;
}

.infop{
    margin-left: 295px;
    margin-top: 17px;
}

.cardtempo{
    /* margin-left: 295px; */
}
</style>