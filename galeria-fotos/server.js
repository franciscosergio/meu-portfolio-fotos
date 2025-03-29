const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Modelo de Foto
const FotoSchema = new mongoose.Schema({
  // Adicione os campos da foto de acordo com o que está nos documentos
  nome: String,
  autor: String,
  link: String,
  categoria: String
});


const Foto = mongoose.model('galeria/arquivos', FotoSchema); // Nome da coleção como está no Compass

const app = express();

// Middleware
app.use(cors());

app.use(express.json()); // Para processar JSON no corpo da requisição
app.use(express.urlencoded({ extended: true })); // Para processar dados codificados em URL



// Conexão ao MongoDB
mongoose.connect('mongodb://localhost:27017/galeria', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado ao MongoDB!'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota para adicionar uma nova foto

const { MongoClient } = require('mongodb');

app.post('/foto', async (req, res) => {
  const { nome, autor, link, categoria } = req.body; // Extrai os dados do corpo da requisição

  try {
    // Conexão com o MongoDB
    const client = await MongoClient.connect('mongodb://localhost:27017/galeria', { useUnifiedTopology: true });
    const db = client.db('galeria');
    const collection = db.collection('arquivos');

    // Salvar os dados na coleção
    const novaFoto = { nome, autor, link, categoria };
    const resultado = await collection.insertOne(novaFoto);

    res.status(201).json({ message: 'Foto adicionada com sucesso!', foto: resultado.ops[0] });
    client.close();
  } catch (err) {
    console.error('Erro ao adicionar foto:', err);
    res.status(500).send('Erro ao salvar a foto');
  }
});

// Rota para buscar todas as fotos
app.get('/foto', async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/galeria', { useUnifiedTopology: true });
    const db = client.db('galeria');
    const collection = db.collection('arquivos');

    // Busca todos os documentos
    const fotos = await collection.find().toArray();

    res.json(fotos); // Retorna as fotos como JSON
    client.close();
  } catch (err) {
    console.error('Erro ao buscar fotos:', err);
    res.status(500).send('Erro ao buscar fotos');
  }
});


// Porta do Servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
