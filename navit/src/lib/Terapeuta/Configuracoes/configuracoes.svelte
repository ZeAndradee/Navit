<script>
    import ConfiguracoesConta from "$lib/Terapeuta/Configuracoes/ConfiguracoesConta.svelte";
    import Notificacoes from "$lib/Terapeuta/Configuracoes/Notificacoes.svelte";

    let selectedButton = 'configuracoes';
</script>

<div class="card-config">
    <div class="header-row">
        <button class="txt-header" on:click={() => selectedButton = 'configuracoes'} style="border-color: {selectedButton === 'configuracoes' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'configuracoes' ? '#006AFF' : '#717B8C'}">Configurações da Conta</span>
        </button>
        <button class="txt-header" on:click={() => selectedButton = 'notificacoes'} style="border-color: {selectedButton === 'notificacoes' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'notificacoes' ? '#006AFF' : '#717B8C'}">Notificações</span>
        </button>
        <button class="txt-header" on:click={() => selectedButton = 'duvidas'} style="border-color: {selectedButton === 'duvidas' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'duvidas' ? '#006AFF' : '#717B8C'}">Dúvidas</span>
        </button>
    </div>
    
    <div class="div">
        {#if selectedButton === 'configuracoes'}
            <ConfiguracoesConta/>
        {/if}
        {#if selectedButton === 'notificacoes'}
            <Notificacoes/>
        {/if}
    </div>    
    
</div>

<style>
    .card-config{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: white;
        margin-left: 50px;
        margin-right: 50px;
    }

    .header-row{
        display: flex;
        flex-direction: row;
        gap: 15px;
        margin-left: 70px;
        margin-top: 30px;
    }

    .txt-header{
        padding: 0px 8px 3px 8px;
        border-bottom: 2px solid #E0E4EC;
        border-radius: 1px;
        cursor: pointer;
    }
    .txt-header span{
        font-weight: 500;
        color: #717B8C
    }

    .div{
        width: 100%;
        height: 100%;
    }
</style>