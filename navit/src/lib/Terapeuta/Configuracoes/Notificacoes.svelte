<script>
</script>

<div class="configuracoes-conta-card">
  <div class="title-1">
    <span>Escolher quando e como você quer receber notificações</span>
  </div>
  <div class="title-2">
    <span
      >Selecione as notificações push e por e-mail que você quer receber</span
    >
  </div>
  <!-- Divide Line -->
  <div class="divide-line"></div>

  <div class="input-section">
    <div class="row">
      <div class="title-3">
        <span>Geral</span>
      </div>
    </div>

    <div class="row">
      <div class="title-4">
        <span>Gerenciar suas notificações para computadores</span>
      </div>
    </div>

    <!-- Opcoes Notificacao -->
    <div class="column-1">
        <div class="opcoes">
            <!-- Opcao 1 -->
            <div class="row3">
                <div class="title-5">
                <span>Notificações no desktop</span>
                </div>
                    <div class="row4"  style="margin-left: 20px;">
                        <div class="column-2">
                            <!-- Rounded switch -->
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="column-2">
                            <span class="bg-title">Receber Notificações no Desktop</span>
                            <span class="sb-title">Receber notificações mesmo que você não esteja no YouMe</span>
                        </div>
                    </div>
            </div>
            <div class="row3">
                <div class="title-5">
                    <span>Suas Preferências</span>
                </div>
                    <div class="opcoes2">
                        <!-- Opcao 1 -->
                        <div class="row4">
                            <div class="column-2">
                                <!-- Rounded switch -->
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="column-2">
                                <span class="bg-title">Novos Pacientes</span>
                                <span class="sb-title">Enviar notificações sobre a atividade de novos pacientes</span>
                            </div>
                        </div>

                        <!-- Opcao 2 -->
                        <div class="row4">
                            <div class="column-2">
                                <!-- Rounded switch -->
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="column-2">
                                <span class="bg-title">Novas Consultas</span>
                                <span class="sb-title">Enviar notificações sobre a atividade de novas consultas</span>
                            </div>
                        </div>
                    </div>    
            </div>
        </div>
    </div>
  </div>
  <div class="row3-btn">
    <div>
      <button class="btn-save-profile">Salvar Alterações</button>
    </div>
  </div>
</div>

<style>
  .configuracoes-conta-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 40px 140px 30px 70px;
    border-radius: 10px;
  }
  .title-1 {
    font-size: 20px;
    font-weight: 500;
  }
  .title-2 {
    margin-top: 5px;
    font-size: 16px;
    font-weight: 500;
  }

  .title-2 span {
    text-align: justify;
  }
  .title-3 {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
  }
  .title-4 {
    margin-top: 15px;
    font-size: 14px;
  }

  .title-5 {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 500;
  }

  .bg-title {
    font-size: 16px;
    font-weight: 500;
  }
  .sb-title {
    font-size: 14px;
    font-weight: 400;
  }

  .divide-line {
    width: 100%;
    height: 2px;
    background: #e0e4ec;
    margin-top: 40px;
  }

  .input-section {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
  .row3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }

  .row3 span {
    margin-left: 23px;
  }

  .row4{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  .opcoes {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .opcoes2 {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;
  }

  .column-1 {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .btn-save-profile {
    width: 201px;
    height: 49px;
    border-radius: 8px;
    background: #006aff;
    color: white;
    font-weight: 500;
  }

  .row3-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    gap: 50px;
  }

  /* Estilo Switch */
  /* The switch - the box around the slider */

.switch {
  position: relative;
  display: inline-block;
  width: 85px;
  height: 34px;
  transform: scale(0.7);
}



/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #006aff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #006aff;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
