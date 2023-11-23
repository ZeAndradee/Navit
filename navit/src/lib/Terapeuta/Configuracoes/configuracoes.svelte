<script>
    import ConfiguracoesConta from "$lib/Terapeuta/Configuracoes/ConfiguracoesConta.svelte";
    import LoginESeguranca from "$lib/Terapeuta/Configuracoes/LoginESeguranca.svelte";
    let selectedButton = 'config';
</script>

<div class="card-config">
    <div class="header-row">
        <button class="txt-header" on:click={() => selectedButton = 'config'} style="border-color: {selectedButton === 'config' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'config' ? '#006AFF' : '#717B8C'}">Configurações da Conta</span>
        </button>
        <button class="txt-header" on:click={() => selectedButton = 'login'} style="border-color: {selectedButton === 'login' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'login' ? '#006AFF' : '#717B8C'}">Login e Segurança</span>
        </button>
        <button class="txt-header" on:click={() => selectedButton = 'interface'} style="border-color: {selectedButton === 'interface' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'interface' ? '#006AFF' : '#717B8C'}">Interface</span>
        </button>
        <button class="txt-header" on:click={() => selectedButton = 'notificacao'} style="border-color: {selectedButton === 'notificacao' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'notificacao' ? '#006AFF' : '#717B8C'}">Notificações</span>
        </button>
        <button class="txt-header" on:click={() => selectedButton = 'duvidas'} style="border-color: {selectedButton === 'duvidas' ? '#006AFF' : '#E0E4EC'}">
            <span style="color: {selectedButton === 'logduvidasin' ? '#006AFF' : '#717B8C'}">Dúvidas</span>
        </button>
    </div>
    
    <div class="div">
        {#if selectedButton === 'config'}
            <ConfiguracoesConta/>
        {/if}
        {#if selectedButton === 'login'}
            <LoginESeguranca/>
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