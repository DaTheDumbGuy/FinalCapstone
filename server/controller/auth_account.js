const mySql = require('mysql2');

const db = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
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
// exports.display = (req, res) => {
//     db.query(`SELECT * FROM movie_reviews`, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     })
// }