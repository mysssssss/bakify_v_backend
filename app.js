const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');
const port = process.env.PORT || 5000;

const passageRouter = require('./routes/passage');

const connectDB = require('./db/connect');

app.use(express.static('client'));
app.use(express.json());
app.set('trust proxy', 1);

app.get('/', (req, res) => {
  res.send('index');
});

app.use('/api/v1/passage', passageRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
