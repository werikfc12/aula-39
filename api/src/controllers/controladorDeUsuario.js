const servicoDeUsuario = require("../services/servicoDeUsuario");
const { HttpError } = require("../errors/HttpError");

class ControladorDeUsuario {
  pegarTodos(_req, res) {
    try {
      const usuarios = servicoDeUsuario.buscarTodos();

      if (usuarios.length === 0) {
        return res
          .status(404)
          .json({ messagem: "Nenhum usuário foi encontrado." });
      }

      res.status(200).json(usuarios);
    } catch (error) {
      res
        .status(500)
        .json({ erro: error.message || "Erro ao buscar usuários." });
    }
  }
}


pegarUmPeloID(req, res) {
try{

const id = req.params.id;
const usuarios = servicoDeUsuario;pegarUmPeloID(id)


if (usuario.length == 0) {
  return res
.status(404)
.json({messagem: "Nenhum usuário foi encontrado"});

}

res.status(200).json(usuario);
} catch (error) {
  res 
  .status(500)
  .json({ erro: error.message || "Erro ao buscar usuários."});
}

  cadastrar(req, res) {
    try {
      const { nome, email, cpf, senha } = req.body;
      const resposta = servicoDeUsuario.cadastrar(nome, email, cpf, senha);

      if (resposta instanceof Error) {
        return res.status(400).json(resposta.message);
      }

      res.status(201).json(resposta);
    } catch (error) {
      res
        .status(500)
        .json({ erro: error.message || "Erro ao buscar usuários." });
    }
  }
  

  conectar(req, res) {
    try {
      const { email, senha } = req.body;
      const resposta = servicoDeUsuario.conectar(email, senha);

      if (resposta instanceof HttpError) {
        return res.status(resposta.status).json({ erro: resposta.message });
      }

      res.status(200).json(resposta);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.status).json({ erro: error.message });
      }

      res.status(500).json({ erro: error.message });
    }
    
    
    
  } 



module.exports = new ControladorDeUsuario();
