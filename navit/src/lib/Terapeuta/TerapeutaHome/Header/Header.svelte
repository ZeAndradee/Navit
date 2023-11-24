<div class="header">
    <SearchCase />
    <div class="pfp"><PFP /></div>
    
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
    
</style>

<script>
    import SearchCase from "$lib/Terapeuta/TerapeutaHome/Header/searchCase.svelte";
    import PFP from "$lib/Terapeuta/TerapeutaHome/Header/PFP.svelte";
</script>