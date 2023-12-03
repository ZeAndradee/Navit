<script>
    import SearchCase from "$lib/Terapeuta/TerapeutaHome/Header/searchCase.svelte";
    import PFP from "$lib/Terapeuta/TerapeutaHome/Header/PFP.svelte";
    import ProfileFloatingCard from "$lib/Perfil/ProfileFloatingCard.svelte";
    let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<div class="header">
    <SearchCase />
    <button class="pfp" on:click={toggleMenu}><PFP /></button>
    {#if showMenu}
    <div class="profile-menu">
        <ProfileFloatingCard />
    </div>
    {/if}
</div>

<style>
    .header{
        display: flex;
        flex-direction: row;
        width: 100%;
        
    }

    .pfp{
        margin-left: auto;
    }

    .profile-menu{
        position: absolute;
        z-index: 1;
        top: 100%;
        right: 0;
        margin-top: 8px;
        margin-right: 48px;
    }
    
</style>
