const usuarioModel = require("../models/usuarioModel");



// Responsável por renderizar a página de cadastro de usuários
function exibirPaginaCadastro(request, response) {
  response.render('cadastro');
}



function autenticarUsuario(request, response) {
  console.log(request.body);




  const { nome, email, senha } = request.body;



  //adicionar usuario
  usuarioModel.adicionarUsuario(nome, email, senha);



  //readicionar para a pagina de login
  response.redirect("/")
}



module.exports = {
  exibirPaginaCadastro,
  autenticarUsuario
}
