import express from 'express';
import { APP_PORT, DB_URL } from './config.js';
import pkg from 'mongoose';
const app = express();
import Product from './model.js';
import cors from 'cors';

const { connect, connection } = pkg;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  console.log(req.body);
  const result = await Product.findById('63679273b8a6246c709b0463');
  console.log(result);
  res.send('Home Page');
});

app.post('/compare', async (req, res) => {
  // todo if condition for check
  const idsArray = [req.body.id1, req.body.id2];
  const result = await Product.find().where('_id').in(idsArray).exec();
  console.log(result, 'result');
  res.send(result);
});

connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('DB connected');
});

app.listen(APP_PORT, () => {
  console.log(`listening on port ${APP_PORT}`);
});
