<script>
    // import headerPaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/headerPaciente/headerpaciente.svelte";
    // import InfoPaciente from "$lib/Terapeuta/Terapeuta-Prontuarios2/infoPaciente/infoPaciente.svelte";
    // import Cardtemptela from "$lib/Terapeuta/Terapeuta-Prontuarios2/cardtempotela/cardtemptela.svelte";
    // import Cardbotaoutilizado from "$lib/Terapeuta/Terapeuta-Prontuarios2/cardbotaoutilizado/cardbotaoutilizado.svelte";
    import SideBarMenuInicio from "$lib/SideBarMenu/SideBarMenu.svelte"
    import HeaderProntuario from "$lib/Terapeuta/Terapeuta-Prontuarios1/headerProntuarioPaciente/HeaderProntuario.svelte";

    import { onMount } from "svelte";

    onMount(() => {
    document.title = 'Prontuários Pacientes';
  });
</script>


<div class="header_pesquisa">
    <HeaderProntuario />
</div>

<div class="sidebar">
    <SideBarMenuInicio />
</div>


<style>

</style>
