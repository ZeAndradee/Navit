<h1 align="center"> Plataforma Web - YouMe Dashboard </h1>

![logo navit](https://github.com/ZeAndradee/Navit/assets/59659214/8e2b9742-abb1-4374-9236-74d3c7f98d1b)

# Badges
![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)
# Índice
* [Badges](#badges)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)

# Descrição do Projeto
<p> Propomos a criação de um site de apoio integrado ao aplicativo, visando solucionar os desafios atuais relacionados à leitura dos dados pelos clínicos. Este projeto consiste no desenvolvimento de uma dashboard web intuitiva e informativa. A plataforma permitirá que terapeutas envolvidos no aplicativo acessem e interpretem facilmente os dados, proporcionando uma visão clara da evolução dos pacientes. A interface será projetada de forma a facilitar a compreensão dos dados, promovendo uma gestão eficiente do tratamento e contribuindo para o aprimoramento do desenvolvimento dos pacientes. </p>

# :white_check_mark: Tecnologias Utilizadas
<ul>
  <li>Javascript</li>
  <li>CSS</li>
  <li>Git e Github</li>
  <li>SvelteKit</li>
  <li>HTML</li>
  <li>Figma</li>
  <li>Trello</li>
  <li>VS Code</li>
  <li>Node version managers(NPM)</li>
  <li>Vercel</li>
</ul>

# ⚙ Como Executar a Aplicação:

* Git clone 
* Acessar o diretorio clonado, utilize o git bash
* npm i
* npm start

# :hammer: Funcionalidades e Demonstração da Aplicação
`Tela de Login`: <p>tela de login incial do terapeuta.</p> 

![Tela Inicial](<src/Assets/Readme/Tela Inicial.png>)

<p> 
A tela de login de acesso ao terapeuta contém 2 arquivos:

🛠️ FormLogin.Svelte onde o login e sua estilização estão contidos.

🌐​ +page.svelte inserido na pasta de login, que importa o arquivo FormLogin.Svelte citada anteriormente e estiliza a página.

</p>
<br/>
<br/>

`Tela Princial`: <p>Tela inicial após o terapeuta executar seu login, contem vários dados e tabelas, além de acesso rápido a detalhes de pacientes.</p>

![Tela de Login - Agente](src/Assets/Readme/Login-user.png)

A tela de login é composta por 6 arquivos .svelte: Header, SideBarMenu, EstatisticasDiarias, GraficoCliques, ListaPacientes e GraficoComportamento.

<h3>📰​ O Header</h3> 
<ul><li>Por sua vez, contém mais 2 arquivos em sua construção, o SearchCase (responsável pela barra de pesquisa) e o PFP (responsável pela foto de perfil do usuário), ele então estiliza e posiciona as funções de acordo.
</li></ul>
<h3>🗺️​ SideBarMenu </h3>
<ul><li>funciona como a principal navegação do site, possibilitando acessar outras telas, logo ele apenas importa a função { goto } que faz parte do Svelte ($app/navigation).</li></ul>

<h3>📊​ EstatisticasDiarias </h3>
<ul><li>Permite a visuialização de dados gerais ao terapeuta, como tempo total de sessão, progresso de pacientes e status.</li></ul>

<h3>📊​ GraficoCliques</h3>
  <ul><li>Proporciona o acompanhamento dos dados do paciente conforme o aplicativo, assim proporcionando uma visualização mais simples acerca do uso dos pacientes do aplicativo.</li></ul>

<h3>📃​ ListaPacientes</h3>
<ul><li>Disponibiliza fácil acesso a detalhes sobre os pacientes do terapeuta.</li></ul>

<h3>📊​ GraficoComportamento</h3>
<ul><li>Permite que o terapeuta consiga visualizar a média comportamental dos pacientes em 6 tópicos diferentes, Feliz, Atento, Confuso, Agitado, Calmo e Triste.</li></ul>
<br>

<p>Utilizamos principalmente a biblioteca chat.js para construção dos gráficos.</p>

<br/>
<br/>

`Tela de Dúvidas`: <p>Tela de suporte aos usuários para resolver problemas e dúvidas. </p>

![Tela de Login - Agente](src/Assets/Readme/Login-user.png)

A tela de dúvidas é constituidas por 2 elementos que já apareceram e 1 específico para página: SideBarMenu, Header e Duvidas.

<h3>📰​ O Header</h3> 
<ul><li>Por sua vez, contém mais 2 arquivos em sua construção, o SearchCase (responsável pela barra de pesquisa) e o PFP (responsável pela foto de perfil do usuário), ele então estiliza e posiciona as funções de acordo.
</li></ul>

<h3>🗺️​ SideBarMenu </h3>
<ul><li>funciona como a principal navegação do site, possibilitando acessar outras telas, logo ele apenas importa a função { goto } que faz parte do Svelte ($app/navigation).</li></ul>

<h3>🤔​ Duvidas </h3>
<ul><li>Responsável pela função principal da página, não só cria a barra para descrição do problema como também cria os cards com dúvidas já existentes para facilitar a busca.Além disso, também comtém a estilização.</li></ul>
<br/>
<br/>

`Tela de Prontuários`: <p>Esta tela permite ao terapeuta o acesso aos prontuários, disponibilizando informações mais detalhadas sobre cada paciente</p>

![Tela de Cadastro Agente](src/Assets/Readme/CadastroUser.png)


<p>Para a construção da tela foi utilizado 4 arquivos svelte além dos arquivos Header e SideBarMenu:</p>

⭐ PacienteProntuarioInfo foi onde trabalhamos a apresentação visual dos elementos.

<h3>📰​ HeaderTerapeuta</h3> 
<ul><li>Contém informações gerais sobre o andamento do tratamento dos pacientes
</li></ul>

<h3>🪪​ PacienteProntuarioInfo</h3>
<ul><li> Contém dados sobre os pacientes como: As avaliações da sessão, o ID do paciente, seu gênero, o número de sessões e a data de nascimento do paciente.</li></ul>

<h3>🔍​ SearchBar </h3>
<ul><li> Uma barra de pesquisa para facilitar a busca por pacientes específicos.</li></ul>

<h3>📊​​ PacientesInfo </h3>
<ul><li> Dados de como está o andamento dos tratamentos.</li></ul>

<h3>🪪​ TableProntuarios (CardProntuarios) </h3>
<ul><li> Utiliza dois arquivos para uma função, primeiro ele utiliza os dados do TableProntuarios (nome do paciente, andamento do tratamento, data de nascimento, número de sessões e ultima atualização de paciente) e distribui ele a partir do CardProntuarios.</li></ul>
<br/>
<h3> Além disso, temos uma tela expandida com a informação dos pacientes</h3>
![Tela de Cadastro Agente](src/Assets/Readme/CadastroUser.png)
<br/>
<p> Além das informações supracitadas, o terpeuta teria como acompanhar as sessões anteriores dos pacientes através do paciente. Arquivos adicionais foram adicionados para isto, são eles: </p>
<h3>🪪​ InfoPaciente </h3>
<ul><li> Possui informações sobre o paciente.</li></ul>

<h3>📃​​ ListaSessoes </h3>
<ul><li> Disponibiliza uma lista com as sessões anteriores do paciente.</li></ul>

<h3>🪪​ HeaderPaciente</h3>
<ul><li> Cria o estilo para o cabeçalho do paciente.</li></ul>
<br/>
<br/>

`Tela de Configurações`: <p>Tela utilizada para alterar dados do perfil e notificações, também podemos acessar a aba de dúvidas a partir dela</p>

![Tela de Cadastro Agente](src/Assets/Readme/CadastroUser.png)

<p>Os componentes utilizados para construção desta tela foram:</p>

<h3>🪪​​ ConfiguracoesConta</h3> 
<ul><li>Contém a personalização da conta do terapeuta
</li></ul>

<h3>🔔​ Notificacoes</h3>
<ul><li> Possibilita a personalização das notificações do site</li></ul>

<h3>🤔​ Duvidas </h3>
<ul><li> Facilita o acesso a retirar dúvidas.</li></ul>

<h3>⚙️ Configurações </h3>
<ul><li> Une todos os arquivos acima e os estiliza para a página.</li></ul>

<br/>
<br/>

# Pessoas Desenvolvedoras do Projeto
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/89558668?v=4" width=115><br><sub>Ana Beatriz Lira</sub>](https://github.com/anabsl) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/146121865?v=4" width=115><br><sub>Anderson Fernandes</sub>](https://github.com/AndersonFernandes-dev) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/146091291?v=4" width=115><br><sub>Artur Ramos</sub>](https://github.com/Arturdev05) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/124224859?v=4" width=115><br><sub>Beatriz Rodrigues</sub>](https://github.com/Beatriz-Rodriguesx) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/145875117?v=4" width=115><br><sub>Beatriz Silva</sub>](https://github.com/BiaSilvaa) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/144251910?v=4" width=115><br><sub>Carlos Lima</sub>](https://github.com/CarlosDev258) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/104471926?v=4" width=115><br><sub>Flavia Favacho</sub>](https://github.com/flaviafavacho) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/145810174?v=4" width=115><br><sub>Gabriel Oliveira</sub>](https://github.com/gabrieloliveiraa05) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/144847596?v=4" width=115><br><sub>Joana D'Arc</sub>](https://github.com/joanadarc84) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/69319634?v=4" width=115><br><sub>Kelvia Santos</sub>](https://github.com/kelvia-snts) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/62075108?v=4" width=115><br><sub>Rennan Reis</sub>](https://github.com/rennan2020) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
