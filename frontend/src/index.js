const express = require('express');
const app = express();
const port = 3001;

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
