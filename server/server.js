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
    saveUninitialized: true,
    cookie: { maxAge: 3600000 } // expires in one hour
}));


// app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


function requireLogin(req, res, next) {
    console.log(member_id);
    if (req.session && req.session.member_id) {
        // User is authenticated, allow access to the next route
        next();
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/login');
    }
}

app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
