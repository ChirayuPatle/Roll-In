import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('healthy');
  res.send('healthy');
});

app.listen(8080);
