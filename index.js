const express = require('express');

const { configHbs } = require('./config/hbsConfig');
const { expressConfiguration } = require('./config/expressConfig');
const { router } = require('./config/routes');
const port = 3003;

const app = express();

configHbs(app);
expressConfiguration(app);
app.use(router);

app.listen(port, () => console.log(`Express is running on port: ${port}`));


