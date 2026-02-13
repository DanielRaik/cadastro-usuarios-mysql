const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Preencha todos os campos' });
  }

  const sql = 'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)';

  // tratamentos de erros
  // error
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro no cadastro', err });
    }

    // alert confirmação
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  });
});

// rodar server | terminal: 
// > cd backend
// > node index.js
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
