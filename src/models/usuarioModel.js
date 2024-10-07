
const md5 = require("md5");
 
// Importando a conexão com o banco de dados
const pool = require("../config/banco-de-dados");
 
function adicionarUsuario(nome, email, senha) {

 
  // Adiciona um novo usuário no banco de dados
  pool
    .query(
      `INSERT INTO usuarios(nome, email, senha, criadoEm) VALUES ('${nome}', '${email}', '${md5(senha)}', NOW())`
    )
    .then(() => {
      console.log("DEU CERTO");
    })
    .catch((error) => {
      console.error("ERRO AO INSERIR DADOS", error);
    });
}
 
async function buscarUsuarioPorEmail(email) {
  const usuario = await pool.query(`SELECT * FROM usuarios WHERE email = '${email}'`);
  return usuario[0][0]
}
 
module.exports = {
  adicionarUsuario,
  buscarUsuarioPorEmail
};