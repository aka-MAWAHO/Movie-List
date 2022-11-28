import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'test',
});


app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{

res.json('holla this is backend')

})

app.get('/movies', (req, res)=>{
const q='SELECT * FROM movies'
db.query(q,(err,data)=>{
if(err) return res.json(err)

res.json(data)


})


})
app.post('/movies', (req, res)=>{

    const q ='INSERT INTO movies (`title`,`desc`,`cover`) VALUES (?)'
const values=[
req.body.title,
req.body.desc,
req.body.cover,


]

db.query (q,[values],(err,data) => {
    if(err) return res.json(err)

    res.json("movies created successfully")
})
})

app.listen (8800,()=>{

console.log("connected to backend ");

})