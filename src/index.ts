import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/', (req, res) => {
  res.json({ success: true });
});

const config = {
  port: 3200,
};

app.listen(config.port, () => {
  console.log(`🚀 Server ready at: http://localhost:${config.port})`);
});
