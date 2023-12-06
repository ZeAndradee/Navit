<script>
</script>

<div class="configuracoes-conta-card">
  <div class="title-1">
    <span>Dúvidas</span>
  </div>
  <!-- Divide Line -->
  <div class="divide-line"></div>
  <div class="column-1">
    <div class="comoAjudar-title">
        <span>Como podemos ajudar?</span>
    </div>
    <div class="container">
        <form action="" class="search-bar">
            <input type="text" placeholder="Descreva o seu problema" name="q" class="focus:ring-0" autocomplete="off">
            <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#656575" stroke-width="1.80206" stroke-linecap="round"/>
              </svg> </button>
        </form>
    </div>
    <div class="naoencontrou-title">
        <span>Não encontrou o que buscava? Acesse a nossa <a href="/Terapeuta/Duvidas"><b >Central de Ajuda ao Usuário<b></b></a> </span>
    </div>
  </div>
</div>

<style>
    .configuracoes-conta-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 40px 70px 30px 70px;
        border-radius: 10px;
    }
    .title-1 {
        display: flex;
        flex-direction: row;
        font-size: 20px;
        font-weight: 500;
        justify-content: center;
    }
    .divide-line {
        width: 100%;
        height: 2px;
        background: #e0e4ec;
        margin-top: 40px;
    }

    .column-1 {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        margin-top: 20px;
        justify-content: center;
    }

    .comoAjudar-title{
        display: flex;
        flex-direction: row;
        font-size: 26px;
        font-weight: 500;
        justify-content: center;
        margin-top: 20px;
        color: #006AFF;
    }

    .search-bar{
        margin-top: 45px;
        display: flex;
        width: 100%;
        min-width: 319px;
        max-width: 585px;
        height: 48px;
        padding: 10px 24px 12px 32px;
        background: white;
        border-radius: 10px;
        outline: none;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0px 2.70309px 27.03093px 0px rgba(69, 69, 80, 0.10);
    }

    
    .search-bar input{
        background: transparent;
        flex: 1;
        border: 0;
        font-family: "Inter", Arial, sans-serif;
    }
    
    .naoencontrou-title{
        display: flex;
        margin-top: 78px;
        justify-content: center;
        flex-direction: row;
        font-style: normal;
        font-weight: 500;
    }

    .naoencontrou-title b{
        font-weight: 500;
        color: #006AFF;
    }
</style>