const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// conectar ao MongoDB

mongoose.connect('mongodb://localhost:27017/galeria')
  .then(() => console.log('Conectado ao MongoDB Local'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Local:', err));

  app.get('/fotos', async (req, res) => {
    try {
      const fotos = await fotos.find(); // Assumindo que você já tem o modelo "Foto"
      res.json(fotos);
    } catch (err) {
      res.status(500).send('Erro ao buscar fotos');
    }
  });

  app.post('/fotos', async (req, res) => {
    try {
      const novaFoto = new Foto(req.body); // Assumindo que req.body tem os dados da foto
      await novaFoto.save();
      res.status(201).send('Foto adicionada com sucesso!');
    } catch (err) {
      res.status(400).send('Erro ao adicionar foto');
    }
  });
  
  

// Porta do Servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));