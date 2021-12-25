const { cloudinary } = require('./utils/cloudinary');
import path from 'path';
const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
    .expression('folder:carrito22')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
  const publicIds = resources.map(file => file.public_id);
  res.send(publicIds);
});

app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'carrito22_preset',
    });
    console.log(uploadResponse);
    res.json({ msg: 'Cargado a cloudinary ok YO!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Server: hubo un error al intentar subir a cloudinary' });
  }
});

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/frontend/build/index.html')));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
