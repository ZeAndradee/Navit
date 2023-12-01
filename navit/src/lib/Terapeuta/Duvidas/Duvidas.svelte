<div class="card-duvidas">
    <div class="card-duvidas-interno">
        <div class="column">
            <div class="header-txt">
                <span class="header1">YOUME PERGUNTAS E RESPOSTAS</span>
                <span class="header2">Como podemos ajudar?</span>
                <form action="" class="search-bar">
                    <input type="text" placeholder="Descreva o seu problema" name="q">
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#656575" stroke-width="1.80206" stroke-linecap="round"/>
                        </svg> 
                    </button>
                </form>
            </div>
            <div></div>
        </div>
    </div>
</div>


<style>
    .card-duvidas{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 40px 48px 40px 40px;
    }
    .column{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .card-duvidas-interno{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: white;
    }
    .header-txt{
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .header1{
        text-align: center;
        color: #006AFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 3px;
    }
    .header2{
        margin-top: 10px;
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
    }

    /* SearchBar */
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
    
    .search-bar input:focus { outline: none; }
</style>