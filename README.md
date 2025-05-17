
# 📄 Documentação: CRUD com Node.js + Express

## 🧠 O que é CRUD?

CRUD é um acrônimo para as **quatro operações básicas** de manipulação de dados em uma aplicação:

| Letra | Operação | Método HTTP | Ação típica |
|-------|----------|-------------|-------------|
| C     | Create   | POST        | Criar um dado |
| R     | Read     | GET         | Ler/consultar um dado |
| U     | Update   | PUT/PATCH   | Atualizar um dado |
| D     | Delete   | DELETE      | Remover um dado |

---

## 📦 Estrutura típica de uma API CRUD

Vamos supor que você tem uma API de usuários com a seguinte estrutura de rota base:

```
/usuarios
```

As rotas seriam:

- `POST /usuarios` → criar novo usuário  
- `GET /usuarios` → listar todos os usuários  
- `GET /usuarios/:id` → buscar um usuário por ID  
- `PUT /usuarios/:id` → atualizar usuário (substituição total)  
- `PATCH /usuarios/:id` → atualizar parcialmente  
- `DELETE /usuarios/:id` → deletar usuário  

---

## ✍️ UPDATE – Atualizando um registro

### Métodos: `PUT` ou `PATCH`

- `PUT`: Atualiza **todos os campos** (requisição deve conter tudo).
- `PATCH`: Atualiza **parcialmente** (só os campos enviados).

### Exemplo com Express + array local

```js
// PATCH /usuarios/:id
app.patch('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const { nome, email } = req.body;

  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  if (nome) usuario.nome = nome;
  if (email) usuario.email = email;

  res.json(usuario);
});
```

---

## 🗑️ DELETE – Removendo um registro

### Método: `DELETE`

```js
// DELETE /usuarios/:id
app.delete('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  usuarios.splice(index, 1); // remove 1 elemento no índice encontrado
  res.status(204).send(); // resposta sem conteúdo
});
```

---

## 💡 Dicas:

- Sempre valide se o item existe antes de atualizar ou deletar.
- Use status HTTP corretos:  
  `200` (OK), `204` (No Content), `404` (Not Found), `400` (Bad Request).
- Nunca confie no que vem do cliente — **valide tudo** com bibliotecas como `zod` ou `joi`.

---

## ✅ Conclusão

CRUD é a base de toda API. Saber implementar e entender as rotas de **atualização (PUT/PATCH)** e **remoção (DELETE)** garante controle completo sobre os dados.
