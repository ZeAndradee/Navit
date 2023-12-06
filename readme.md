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
`Tela de Login`: <p>Tela de login incial do terapeuta.</p> 

![image](https://github.com/ZeAndradee/Navit/assets/83325914/7a9a88df-6271-41b6-86dd-942182e5ae74)

<p> 
A tela de login de acesso ao terapeuta contém 2 arquivos:

🛠️ FormLogin.Svelte onde o login e sua estilização estão contidos.

🌐​ +page.svelte inserido na pasta de login, que importa o arquivo FormLogin.Svelte citada anteriormente e estiliza a página.

</p>
<br/>
<br/>

`Tela Principal`: <p>Tela inicial após o terapeuta executar seu login, contem vários dados e tabelas, além de acesso rápido a detalhes de pacientes.</p>

![image](https://github.com/ZeAndradee/Navit/assets/83325914/71cad8a6-e55a-4c48-a9e1-bca98f8ca56f)

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

<p>Utilizamos principalmente a biblioteca chart.js para construção dos gráficos.</p>

<br/>
<br/>

`Tela de Dúvidas`: <p>Tela de suporte aos usuários para resolver problemas e dúvidas. </p>

![image](https://github.com/ZeAndradee/Navit/assets/83325914/cf252079-d61d-4c3d-b9d5-43324e480e45)


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

![image](https://github.com/ZeAndradee/Navit/assets/83325914/8d62005d-491f-4615-b40f-258984df03fa)



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

![image](https://github.com/ZeAndradee/Navit/assets/83325914/acbb3b76-e9a3-449e-801c-9fb318dbdb3d)

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

![image](https://github.com/ZeAndradee/Navit/assets/83325914/d84b3de0-e8c8-48b1-b551-5731f4edf4eb)
![image](https://github.com/ZeAndradee/Navit/assets/83325914/15c9b456-c31c-4a49-93cc-1f0a488eebaf)
![image](https://github.com/ZeAndradee/Navit/assets/83325914/d56babc0-e103-4115-be7c-254ac1c7d20f)

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
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/83325914?v=4" width=115><br><sub>Manoel Leonardo</sub>](https://github.com/manoelleonardocse77e) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/59659214?v=4" width=115><br><sub>José Vinícius</sub>](https://github.com/ZeAndradee) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/116170926?v=4" width=115><br><sub>Maria Fernanda</sub>](https://github.com/mfhhia) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/135342808?v=4" width=115><br><sub>Lucas Alves</sub>](https://github.com/LucasStranger) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/129004284?v=4" width=115><br><sub>Arthur Renê</sub>](https://github.com/ArthurRSS4) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/134803634?v=4" width=115><br><sub>Otton Vinicius</sub>](https://github.com/Ott-on) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/118084378?v=4" width=115><br><sub>Dhavi Domingues</sub>]https://github.com/DhaviDBD) 
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
