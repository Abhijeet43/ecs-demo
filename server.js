import app from './app.js';

const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Congratulations we are in ECS demo changes reflected from github - This is fine!');
});

app.get('/health', (req, res) => {
  res.status(200).send('ECS demo is healthy');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
