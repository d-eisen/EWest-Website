// Load packages
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routes');
// const handlebars = require('handlebars');
const jquery = require('jquery')

// Load mongoose package
const mongoose = require('mongoose');

// Connect to MongoDB and load database
mongoose.connection.openUri(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.dbName}`);

// Import all models
require('./models/file.model.js');
require('handlebars');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use('/api', router);


app.listen(config.port, function() {
  console.log(`${config.appName} listening on port ${config.port}`);
});
