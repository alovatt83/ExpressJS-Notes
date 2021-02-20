const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });

app.use(express.static('./Develop/public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
