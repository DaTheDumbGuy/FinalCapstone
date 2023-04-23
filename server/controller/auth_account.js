const mySql = require('mysql2');

const db = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});
const promiseConnection = db.promise();


db.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }

    console.log('Connected to MySQL as ID ' + db.threadId);
});

exports.checkUsers = (req, res) => {
    db.query(`SELECT * FROM members`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.json(result);

        }
    })
}

exports.loginAccount = async (req, res) => {
    console.log("This is logged in!");
    const { email, password } = req.body;
    console.log(`You logged in this -> Email: ${email}, Password :${password} `);

    try {
        const [data] = await promiseConnection.query('SELECT * FROM members WHERE email = ?', [email]);

        if (!data[0]) {
            console.log("email is incorrect");
            res.status(401).send("Email is incorrect");
        } else if (password !== data[0].password) {
            console.log("password do not match");
            res.status(401).send("Password is incorrect");
        } else {
            console.log("you logged in!")
            res.redirect('/');
        }

    } catch (err) {
        console.log(`Error: \${err}`);
        res.status(500).send("Server error");
    }
}
