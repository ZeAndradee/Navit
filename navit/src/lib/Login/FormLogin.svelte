<div class="form-login">
    <div class="header-txt">
        <span style="font-size: 36px; font-weight:700; color: #1E293B">Acesse a plataforma</span>
        <span style="color: #475569">Faça login para começar a visualizar os seus dados e <br>registros</span>
    </div>
    <div>
        <div class="form">
            <label for="email" style="font-weight:600">CPF ou E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu CPF ou e-mail">
        </div>    
        <div class="form" style="margin-top: 16px">
            <div class="senha-txt">
                <label for="password" style="font-weight:600;">Senha</label>
                <button style="color: #006AFF; font-weight:600; margin-left:auto">Esqueceu a senha?</button>
            </div>
            <input type="password" id="password" name="password" placeholder="Digite sua senha">
            <a href="/Terapeuta/TerapeutaHome">
                <button class="btn-entrar">Entrar</button>
            </a>
        </div>  
    </div>  
</div>

<style>
    .form-login{
        display: flex;
        flex-direction: column;
    }

    .header-txt{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        margin-bottom: 50px;
        gap: 16px;
    }

    .form{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form input{
        border-radius: 4px;
        border: 1px solid #E2E8F0;
        padding: 16px 12px;
    }

    .senha-txt{
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .btn-entrar{
        width: 100%;
        color: white;
        background-color: #006AFF;
        padding: 16px 24px;
        margin-top: 32px;
        border-radius: 4px;
    }
</style>