import express from 'express';

const app = express();

app.listen('/trial', () => {
  console.log('Running !!');
});

export default app;
