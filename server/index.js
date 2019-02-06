import express from 'express';
import {questions} from './api-response';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`LIQID app listening on port ${port}`);
});

app.get("/questions/", (req, res) => {
  res.status(200).send(questions);
});