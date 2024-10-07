## Se baseia em um app de estoque
 
## Dependencias


 - express
 - express-session
 - body-parser
 - chokidar
 - pg
 - promise
 - livereload
 - md5
 - mysql2
 - nodemon
 - connect-livereload
 - ejs
 
## Comandos 
 
USE gerenciadorestoque;
 
CREATE TABLE clientes (
    id int primary key auto_increment,
    nome varchar(255),
    email varchar(255) unique,
    senha varchar(255),
    criadoEm date
);
 
CREATE TABLE produtos (
    id int primary key auto_increment,
    titulo varchar(255),
    fornecedor varchar(255),
    quantidade INT
);
 
select * from clientes where email = "alanruffo777@gmail.com";
 
select * from clientes;
select * from produtos;
 
## Execução do projeto

## CComando para clonar 
 
git clone https://github.com/ruffo1213/atividade-avaliativaa.git
 
## Pasta do projeto
 
gerenciador-estoque-mvc
 
## Instalação das dependências
 
npm install
 
## como iniciar o projeto
 
npm start
tem menu de contexto