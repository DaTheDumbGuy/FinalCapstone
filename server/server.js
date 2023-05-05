const express = require('express');
const app = express();
const port = 1000;
const cors = require('cors');
const env = require('dotenv');
const session = require('express-session');

env.config({ path: './.env' });

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } // expires in one hour
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
