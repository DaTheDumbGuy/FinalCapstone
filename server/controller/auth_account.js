const mySql = require('mysql2');

const db = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

db.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }

    console.log('Connected to MySQL as ID ' + db.threadId);
});

// exports.add = (req, res) => {
//     const { movieName, movieReview } = req.body;
//     db.query(
//         'INSERT INTO movie_reviews(movie_name, movie_review) VALUES (?, ?)',
//         [movieName, movieReview],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send('Error inserting movie review');
//             } else {
//                 console.log(result);
//                 res.status(200).send('Movie review added successfully');
//             }
//         }
//     );
// };

//For debugging purpose
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