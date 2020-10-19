require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./database/connection')

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server started on http://localhost:${process.env.PORT}`));
