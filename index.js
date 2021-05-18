const express = require('express');
const app = express();

// main route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// if there isn't a variable defined by the host, assign 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);
