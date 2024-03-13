import cors from 'cors';
import express, { Request, Response } from 'express';
import * as fs from 'fs';

const app = express();

const port = process.env.POST || 8080;

app.use(express.json());
app.use(cors());

app.get('/api/issues', (req: Request, res: Response) => {

  const text = fs.readFileSync('./resources/issues.json', 'utf8');
  const issues = JSON.parse(text);

  res.send(issues);
});

app.post('/api/issues', (req: Request, res: Response) => {
  const text = fs.readFileSync('./resources/issues.json', 'utf8');
  const issues = JSON.parse(text);

  const lastId = issues[issues.length - 1].id;
  issues.push({ id: lastId + 1, ...req.body });


  console.log("Added Issue: ", req.body);
  fs.writeFileSync('./resources/issues.json', JSON.stringify(issues));
  res.send(issues);
});

app.delete('/api/issues/:id', (req: Request, res: Response) => {
  const text = fs.readFileSync('./resources/issues.json', 'utf8');
  const issues = JSON.parse(text);
  const id = req.params.id;
  const index = issues.findIndex((issue: any) => issue.id === id);
  issues.splice(index, 1);

  console.log("Deleted Issue: ", id);
  fs.writeFileSync('./resources/issues.json', JSON.stringify(issues));
  res.send(id);
});

app.patch('/api/issues/:id', (req: Request, res: Response) => {
  const text = fs.readFileSync('./resources/issues.json', 'utf8');
  const issues = JSON.parse(text);
  const id = req.params.id;
  const index = issues.findIndex((issue: any) => issue.id === parseInt(id));
  issues[index] = { ...req.body, id };
  console.log("Updated Issue: ", issues[index]);
  fs.writeFileSync('./resources/issues.json', JSON.stringify(issues));
  res.send(issues);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
