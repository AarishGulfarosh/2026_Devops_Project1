const express = require('express');
const app = express();
const PORT = 3000;
const version = process.env.APP_VERSION || "unknown";

app.get('/', (req, res) => {
  res.send('
     <h1> Yay! DevOps Project Running Successfully!</h1>
     <p>Version: ${version}</p>
  ');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

