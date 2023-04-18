const express = require('express');
const app = express();
const port = 1000;
const cors = require('cors');
const env = require('dotenv');

env.config({ path: './.env' });

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
