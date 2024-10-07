
 
// Importando a conexão com o banco de dados
const pool = require("../config/banco-de-dados");
 
function adicionarProduto(nome, fornecedor, quantidade) {

 
    
  // Adiciona um novo usuário no banco de dados
 pool
 .query(
   `INSERT INTO produto (produto, fornecedor, quantidade, criadoEm) VALUES ('${nome}', '${fornecedor}', '${quantidade}', NOW())`
 )
 .then(() => {
   console.log("DEU CERTO");
 })
 .catch((error) => {
   console.error("ERRO AO INSERIR DADOS", error);
 });
}



async function listandoEstoque() {
 
    console.log("Listando o estoque...");
    const estoques = await pool.query(`
      SELECT * FROM produto
      `);
   
    return estoques[0];
   
  }
  


module.exports = {
    adicionarProduto,
    listandoEstoque
}

