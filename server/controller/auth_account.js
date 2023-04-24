const mySql = require('mysql2');
const encrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});
const promiseConnection = db.promise();


function magic(value) {
    return value.trim().charAt(0).toUpperCase() + value.trim().slice(1);
}


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


exports.registerAccount = async (req, res) => {
    console.log("You are here on register");
    let { firstName, lastName, email, password, confirm_password } = req.body;

    firstName = magic(firstName);
    lastName = magic(lastName);
    email = email.trim();
    password = password.trim();



    // console.log(`First Name: ${firstName}--Last Name: ${lastName} -- email ${email} password${password}`);
    try {
        const existingUser = await promiseConnection.query(`SELECT * FROM members WHERE email = ?`, [email]);
        if (existingUser[0].length > 0) {
            console.log(existingUser[0]);
            return res.status(409).send({
                message: "User Account Already Exists"
            });
        }

        const hashPassword = await encrypt.hash(password, 8);

        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: hashPassword,
        };

        await promiseConnection.query(`INSERT INTO members SET ?`, [newUser]);
        return res.status(201).send({
            message: "User Account Has Been Added Successfully"
        });

    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).send({
            message: "Error Occurred"
        });
    }
}

exports.loginAccount = async (req, res) => {
    console.log("This is logged in!");
    const { email, password } = req.body;
    console.log(`You logged in this -> Email: ${email}, Password :${password} `);

    try {
        const [data] = await promiseConnection.query('SELECT * FROM members WHERE email = ?', [email]);
        console.log([data]);
        if (!data[0]) {
            console.log("email is incorrect");
            res.status(401).send("Email is incorrect");
        } else {
            const passwordMatch = await encrypt.compare(password, data[0].password);
            if (!passwordMatch) {
                console.log("password do not match");
                res.status(401).send("Password is incorrect");
            } else {
                console.log("you logged in!")
                res.redirect('/');
            }
        }
    } catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).send("Server error");
    }
}