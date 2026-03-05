const express =require('express');
const mysql = require('mysql2')
const cors = require("cors");

const app = express()
// get post put delete
// CRUD 
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "natcom"
})

db.connect(()=>{
    console.log("Database is connected successfully")
})

app.post('/adduser',(req, res)=>{
    const name = req.body.name
    const password = req.body.password

    const sql = `INSERT INTO users (name, password, role) VALUES(?,?, "intern")`;
    db.query(sql, [name, password], (err, result)=>{
        if (err) res.status(500).json({message: "Failed to save"})
        res.status(200).json({message: "User saved successfully"})
    });

})

// postman, thunderclient

app.get('/',(req, res)=>{
    res.send("hello world")
})
app.get('/getallusers', (req, res)=>{
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result)=>{
    res.send(result)

    })

})
app.put('/updateuser/:id', (req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const password = req.body.password;

    const sql = "UPDATE users SET name = ?, password = ? WHERE id = ?";
    db.query(sql, [name,password, id], (err, result)=>{
        res.send(result)
    })
})

app.delete('/deleteuser/:id', (req, res)=>{
    const id  = req.params.id;
    const sql = "DELETE FROM users WHERE  id= ?";
    db.query(sql, id, (err, result)=>{
        res.send(result)
    })
})
app.listen(8000, ()=>{
    console.log("server is running on port 8000")
})