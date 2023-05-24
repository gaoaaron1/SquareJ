{/* Standard lines to start an API */}
const express = require("express") ;
const mysql = require("mysql2");
const cors = require("cors");

const app = express()

app.use(express.json());
app.use(cors());

const db = mysql.createConnection( {
    user: "root",
    host: "127.0.0.1",
    password: "453812",
    database: "loginsystem",
});

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password], 
        (err, result) => {
        console.log(err);
    }
    );
});

//Route used to check if user exists



app.listen(3001, () => {
    console.log("Server running on port 3001");
});