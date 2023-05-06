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
            res.status(401).json({ status: 'error', message: 'Email is incorrect' });
        } else {
            const passwordMatch = await encrypt.compare(password, data[0].password);
            if (!passwordMatch) {
                console.log("password do not match");
                res.status(401).json({ status: 'error', message: 'Password is incorrect' });
            } else {
                console.log("you logged in!");
                req.session.member_id = data[0].member_id;
                res.json({ status: 'success', message: 'Login successful' });
            }
        }
    } catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).json({ status: 'error', message: 'Server error' });
    }
}


//For checking if the user logged in
exports.loginStatus = (req, res) => {
    if (req.session.member_id) {
        res.status(200).json({ member_id: req.session.member_id });
    } else {
        // res.status(401).send('User not logged in');
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error ending session:', err);
            res.status(500).send('Error ending session');
        } else {
            console.log('Session ended(server)');
            res.status(200).send('Session ended');
        }
    });
};

exports.userData = async (req, res) => {
    console.log("You are here in userData");
    try {
        console.log(req.session.member_id);
        const [user] = await promiseConnection.query('SELECT * FROM members WHERE member_id = ?', [req.session.member_id]);
        console.log(user);
        if (user) {
            res.json(user[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

exports.update = async (req, res) => {
    const { id } = req.params; // get user ID from route parameter

    // get updated user data from request body
    const { first_name, middle_name, last_name, address, phone_number, email, date_of_birth, gender, marital_status, occupation } = req.body;

    try {
        const updateUser = {
            first_name: magic(first_name),
            last_name: magic(last_name),
            middle_name: middle_name ? magic(middle_name.trim()) : null,
            address: address ? address.trim() : null,
            phone_number: phone_number ? phone_number.trim() : null,
            email: email ? email.trim() : null,
            date_of_birth: date_of_birth ? new Date(date_of_birth).toISOString().slice(0, 10) : null,
            gender: gender ? gender : null,
            marital_status: marital_status ? marital_status : null,
            occupation: occupation ? occupation : null
        };

        // update user in database
        await promiseConnection.query(
            `UPDATE members SET ? WHERE member_id = ?`,
            [updateUser, id]
        );

        return res.status(200).send({
            message: "User account has been updated successfully."
        });
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).send({
            message: "An error occurred while updating user account."
        });
    }
};
