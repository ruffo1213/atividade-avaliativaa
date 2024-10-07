const md5 = require('md5');
const usuarioModel = require('../models/usuarioModel')



function exibirPaginaLogin(request, response) {
 response.render('login');
}



function exibirPaginaCadastro(request, response) {
 response.render('cadastro');
}




async function autenticarUsuario(request, response) {



 // Pegar as informações do usuário
 const {email, senha} = request.body;



  // Buscar o usuário no banco de dados
  const usuario = await usuarioModel.buscarUsuarioPorEmail(email);



  // Caso o usuário não exista, retorna para página de login
  if(usuario === undefined) {
    response.redirect('/');
    return;
 }



  // Verificar se a senha está correta
  if(md5(senha) !== usuario.senha) {
    response.redirect('/');
   return;
  }

  // Salvar o usuário na sessão
 request.session.usuario = usuario;

  response.redirect("/estoque");
}



module.exports = {
 exibirPaginaLogin,
 exibirPaginaCadastro,
 autenticarUsuario
}


