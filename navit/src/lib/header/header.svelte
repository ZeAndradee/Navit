    
    <script>
        import SearchCase from "./SearchCase.svelte";
        import PFP from "./PFP.svelte";
    </script>
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