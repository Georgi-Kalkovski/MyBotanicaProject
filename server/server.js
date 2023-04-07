const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./routes/species.routes');

const app = express();
const corsOptions = {
  origin: ['http://localhost:3001', 'https://thebookcase.onrender.com', 'http://thebookcase.onrender.com'],
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  port: process.env.PORT || 3000 // Add this line to include the port property
};

app.use(cors(corsOptions));
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected to MongoDB database');
});

app.use(cors(corsOptions )); // enable CORS

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Terter application." });
});

app.use('/api', routes);

app.post('/api', (req, res) => {
  const input = req.body.input;
  console.log(input);
  res.send('Data received');
});

app.listen(corsOptions , () => {
  console.log(`Server listening on port ${corsOptions.port }`);
});