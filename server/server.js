const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

mongoose.connect('mongodb+srv://Terter:Terter@botanica.s3drjky.mongodb.net/BotanicaDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected to MongoDB database');
});

const plantsSchema = new mongoose.Schema({
  id: String,
  scientific_name: String,
  rank: String,
  genus: String,
  family: String,
  year: String,
  author: String,
  bibliography: String,
  common_name: String,
  family_common_name: String,
  image_url: String,
  flower_color: String,
  flower_conspicuous: String,
  foliage_color: String,
  foliage_texture: String,
  fruit_color: String,
  fruit_conspicuous: String,
  fruit_months: String,
  bloom_months: String,
  ground_humidity: String,
  growth_form: String,
  growth_habit: String,
  growth_months: String,
  growth_rate: String,
});

const Plants = mongoose.model('Plants', plantsSchema, 'Plants');

app.use(cors()); // enable CORS

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Terter application." });
});

app.get(`/api/plants`, async (req, res) => {
  const page = req.query.page || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const plants = await Plants.find({}).skip((page - 1) * 10).limit(10);
  console.log(plants)


  res.json({
    totalPages: Math.ceil(await Plants.countDocuments() / limit),
    currentPage: Number(page),
    plants: plants,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
