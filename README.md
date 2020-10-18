# watsonGO
Simples aplicação que faz uso de Text to Speech


##Instalação de Dependências

Rode ```yarn install``` na pasta root do projeto para baixar e instalar as dependências.

##Configuração do Banco de Dados

É preciso criar um banco de dados MYSQL. Após criar o banco com o nome desejado, configure o arquivo .env com os dados do banco e credenciais. Por fim, rode ```ỳarn migrate``` para criar as tabelas necessárias no banco.

##Configuração da API Text to Speech da IBM

É preciso também configurar o arquivo .env com a chave da API e com a url pertinente.

##Buildando o Cliente

Rode ```yarn buildclient```. Isso instalará dependências do cliente e criará a build dele.

##Rodando a Aplicação

Rode o comando ```yarn start``` e abra ```http://localhost:5000``` em seu navegador.
