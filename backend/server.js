import mysql2 from 'mysql2';
import express from 'express';
import cors from 'cors';

const app=express();
const port=4000;

app.use(cors());
app.use(express.json());

//connection

const connection=mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fullstack'
});

//select
app.get('/',(req,res)=>{
    const select="SELECT * FROM students";
    connection.query(select,(err,result)=>{
        if(err) return res.status(500).json(err);
                return  res.status(200).json(result)
    })
});


//insert6b data into the students

app.post('/insert',(req,res)=>{
    const insert="INSERT INTO students (name,email,password) VALUES(?,?,?)";
    connection.query(insert,[req.body.name,req.body.email,req.body.password],(err,result)=>{
           if(err) return res.status(500).json(err);
                return  res.status(200).json(result)
    })
})
//select one by one
app.get('/select/:id',(req,res)=>{
    const {id}=req.params;
    const select="SELECT * FROM students WHERE id=?";
    connection.query(select,[id],(err,result)=>{
        if(err) return res.status(500).json(err);
                return  res.status(200).json(result)
    })
});

//update data into the students

app.put('/Update/:id',(req,res)=>{
    const update="UPDATE students SET name=?,email=?,password=? WHERE id=?";
    const id=req.params.id;
    connection.query(update,[req.body.name,req.body.email,req.body.password,id],(err,result)=>{
         if(err) return res.status(500).json(err);
                return  res.status(200).json(result)
    })
})

//delete data but one by one

app.delete('/delete/:id',(req,res)=>{
    const deletes="DELETE  FROM students WHERE id=?";
    const {id}=req.params;
    connection.query(deletes,[id],(err,result)=>{
            if(err) return res.status(500).json(err);
                return  res.status(200).json(result)
    })
})

app.listen(port,()=>{
    console.log(`Our server Is Listen To http://localhost:${port}/`);
});