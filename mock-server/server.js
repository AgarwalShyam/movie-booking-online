const express = require('express');
const apiMocker = require('connect-api-mocker');

const port = 4000;
const app = express();

app.use('/api', apiMocker('mock-server'));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);