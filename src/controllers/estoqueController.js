const produtoModel = require("../models/produtoModel");


async function renderizarPaginaEstoque(request, response) {
 const estoques = await produtoModel.listandoEstoque();
response.render("estoque", {estoques});
}




// Responsável por renderizar a página de cadastro de produto
function renderizarPaginaProduto(request, response) {
 response.render("criarProduto");
}



function adicionarProduto (request, response){
    console.log (request.body); 
 
    const {nome, fornecedor , quantidade} = request.body;
 
    //adicionar usuario
   produtoModel.adicionarProduto(nome, fornecedor, quantidade);
 
  //readicionar para a pagina de login
   response.redirect("estoque")
  }

 
 

module.exports = {
 renderizarPaginaEstoque,
 renderizarPaginaProduto,
 adicionarProduto,

};

