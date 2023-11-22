<style>    
    .paciente{
        color: #151515;
        justify-content: space-between;
        display:flex;
        flex-direction: row;
        margin-top: -5px;
    }
    
    .paciente p.nome{
        font-size: 18px;
        font-weight: 400;
    }
    
    .infoBase{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .infoBase .nascimento{
        display:block;
    }
    
    .infoAdd{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    .infoAdd > div{
        flex-basis: 50%;
    }
    
    .estado{
        align-self: center;
        padding-left: 8px; 
        padding-right: 8px; 
        padding-top: 4px; 
        padding-bottom: 4px; 
        background: rgba(21.11, 162.56, 8.81, 0.20); 
        border-radius: 10px; 
        justify-content: flex-start; 
        align-items: center; 
        gap: 4px; 
        display: inline-flex;
        color: #15A309; 
        font-size: 10px; 
        font-weight: 400; 
    }
    
    .cb{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }
    
    .botao{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 400;
        background-color:#006AFF;
        width: 188px;
        height: 38px;
        color:#FFFFFF;
        border-radius: 10px;
        
    }
    
    h3{
        font-weight: 700;
        font-size: 10px;
        color:#666666;
    }
    
    .v{
        font-size: 12px;
        width: 110px;
    }
    
    .f{
        margin-top: 22px;
    }
    
    .card{
        height: 610px;
        width: 331px;
        padding: 25px;
        background-color: #ffff;
        border-radius: 4%;
    
    }
    
    .infoAdd .f .vermelho{
        color: #EE615B;
    }
    
    .infoAdd .f .laranja{
        color: #F28F35;
    }
    
    .infoAdd .f .verde{
        color: #15A309;
    }
    </style>
    
    
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Informações do Paciente</title>
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
        </head>
    
        <body>
            <div class="card">
                <div class="paciente">
                    <p class="nome">Pedro Henrique</p>
                    <p class="estado">Ativo</p>
                </div>
    
    
                <div class="infoBase">
                    <div class="nascimento">
                        <h3>Nascimento:</h3>
                        <p class="v data"><b>20/09/2013</b></p>
                    </div>
                    <div class="genero">
                        <h3>Gênero:</h3>
                        <p class="v genero"><b>Masculino</b></p>
                    </div>
                    <div class="sessao">
                        <h3>Sessão:</h3>
                        <p class="v sessao"><b>Sessão 1</b></p>
                    </div>
                </div>
    
    
                <div class="id">
                    <h3>ID:</h3>
                    <p class="v id"><b>h86c0wowtppsujuywq0v4q37</b></p>
                </div>
                
                <div class="infoAdd">
                    
                    <div class="social f">
                        <h3>Social:</h3>
                        <p class="v social vermelho">1/10</p>
                    </div>
                    <div class="evolsocial f">
                        <h3>Evolução Social:</h3>
                        <p class="v evolsocial laranja">Pouco significativa</p>
                    </div>
                    
                    
                    <div class="comportamento f">
                        <h3>Comportamento:</h3>
                        <p class="v comportamento vermelho">3/10</p>
                    </div>
                    <div class="evocomp f">
                        <h3>Evolução Comportamento:</h3>
                        <p class="v evocomp verde">Esperado para atividade</p>
                    </div>
    
                    
                    <div class="fala f">
                        <h3>Fala:</h3>
                        <p class="v fala vermelho">1/10</p>
                    </div>
                    <div class="evolverbal f">
                        <h3>Evolução Verbal:</h3>
                        <p class="v evolverbal vermelho">Fala comprometida</p>
                    </div>
    
                    
                    <div class="habmotoras f">
                        <h3>Habilidades Motoras:</h3>
                        <p class="v habmotoras vermelho">2/10</p>
                    </div>
                    <div class="evomotora f">
                        <h3>Evolução Motora:</h3>
                        <p class="v evomotora laranja">Ok</p>
                    </div>
                </div>
    
                <div class="cb">
                    <div class="botao">
                        <p>Expandir</p>
                    </div>
                </div>
            </div>
        </body>
    </html>