<script>
// @ts-nocheck

let cards = [
        { expanded: false, textElement: null },
        { expanded: false, textElement: null },
        { expanded: false, textElement: null },
        { expanded: false, textElement: null },
    ];
</script>

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
            <div class="inner-row">
                <div class="inner-column">
                    <!-- Opcao 1 -->
                    <div class="question-card">
                        <div class="title-button">
                          <span>Como posso mudar a minha senha?</span>
                          <div class="wrapper">
                            <button class="button-question" on:click={() => {
                                cards[0].expanded = !cards[0].expanded;
                                cards[0].textElement.style.display = cards[0].expanded ? 'block' : 'none';
                            }}>
                                <span>+</span>
                            </button>
                        </div>
                        </div>
                        <div class="txt-extra">
                            <span bind:this={cards[0].textElement}> Ut enim ad midddddd ddddddddddnim veniam quis nostsdsdsdsd sdsdsdsdsdsdsdsdsdsdsdsdsdrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                    </div>

                    <!-- Opcao 2 -->
                    <div class="question-card">
                        <div class="title-button">
                          <span>Como posso mudar a minha senha?</span>
                          <div class="wrapper">
                            <button class="button-question" on:click={() => {
                                cards[1].expanded = !cards[1].expanded;
                                cards[1].textElement.style.display = cards[1].expanded ? 'block' : 'none';
                            }}>
                                <span>+</span>
                            </button>
                        </div>
                        </div>
                        <div class="txt-extra">
                            <span bind:this={cards[1].textElement}> Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                    </div>
                </div>
                <div class="inner-column">
                    <!-- Opcao 3 -->
                    <div class="question-card">
                        <div class="title-button">
                          <span>Como posso mudar a minha senha?</span>
                            <div class="wrapper">
                                <button class="button-question" on:click={() => {
                                    cards[2].expanded = !cards[2].expanded;
                                    cards[2].textElement.style.display = cards[2].expanded ? 'block' : 'none';
                                }}>
                                    <span>+</span>
                                </button>
                            </div>   
                        </div>
                        <div class="txt-extra">
                            <span bind:this={cards[2].textElement}> Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                    </div>
                    <!-- Opcao 4 -->
                    <div class="question-card">
                        <div class="title-button">
                          <span>Como posso mudar a minha senha?</span>
                            <div class="wrapper">
                                <button class="button-question" on:click={() => {
                                    cards[3].expanded = !cards[3].expanded;
                                    cards[3].textElement.style.display = cards[3].expanded ? 'block' : 'none';
                                }}>
                                    <span>+</span>
                                </button>
                            </div>    
                        </div>
                        <div class="txt-extra">
                            <span bind:this={cards[3].textElement}> Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor</span>
                        </div>
                    </div>
                </div>
            </div>
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
        justify-content: center;
    }
    .card-duvidas-interno{
        display: flex;
        padding: 0px 20px 0px 20px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: white;
        border: red 1px solid;
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
        font-weight: 500;
        letter-spacing: 3px;
    }
    .header2{
        margin-top: 10px;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
    }

    .inner-row{
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 100%;
        margin-top: 43px;
        gap: 20px;
    }

    .inner-column{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .question-card{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 585px;
        height: fit-content;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #E0E4EC;
        box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
    }

    .question-card span{
        color: #02347b;
        font-size: 18px;
        font-weight: 500;
    }
    .wrapper {
        padding-left: 15px;
        margin-left: auto;
    }
    .button-question{
        display: flex;
        height: 40px;
        align-items: center;
        padding: 8px;
        background-color: #006AFF;
        border-radius: 8px;
    }
    .button-question span{
        color: white;
        font-size: 30px;
    }

    .title-button{
        display: flex; 
        flex-direction: row;
        align-items: center;
    }

    .txt-extra{
        display: flex;
        width: 100%;
        margin-top: 15px;
        flex-direction: row;
    }
    .txt-extra span{
        width: 100%;
        word-wrap: break-word;
        color: #656575;
        font-size: 14px;
        font-weight: 400;
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

    @media (max-width: 640px){
        .inner-row{
            display: flex;
            flex-direction: column;
        }
    }
</style>