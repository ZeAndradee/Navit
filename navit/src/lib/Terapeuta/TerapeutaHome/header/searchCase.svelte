<div class="container">
    <form action="" class="search-bar">
        <input type="text" placeholder="Pesquise Aqui" name="q">
        <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#656575" stroke-width="1.80206" stroke-linecap="round"/>
          </svg> </button>
    </form>
</div>

<style>
    .search-bar{
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
        
    }

    
    .search-bar input{
        background: transparent;
        flex: 1;
        border: 0;
        font-family: "Inter", Arial, sans-serif;
    }
    
    .search-bar input:focus { outline: none; }
    
    @media(max-width: 1162px){
        .search-bar{
            margin-right: 50px;
        }
    }

</style>