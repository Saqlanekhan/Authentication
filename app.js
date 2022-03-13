const express=require('express')
const pool=require('./database')
const cors =require('cors')
const exp = require('constants')

const app =express()
app.use(express.json())
app.use(cors())

// pool.query('select * from new_table').then(r=>console.log(r[0][0])).catch(er=>console.log(er))

app.post('/signup',(req,res,next)=>{
    // const email=req.body.email
    // const name=req.body.name
const {name,password,email,phone}=req.body;
pool.query(`insert into new_table (email,password,name,number) values('${email}','${password}','${name}',${phone})`,(er,rs)=>{
    if(er){
        console.log(er)
        res.status(500).json({message:'error occured'})
        return
    }
    res.status(201).json({message:"signed up successfully"})
})

// res.status(200).json({message:"done"})


});

app.post('/login',(req,res,next)=>{

const {password,email}=req.body;



pool.query(`select * from new_table where email='${email}'`,(er,rs)=>{
    if(er){
        
        res.status(500).json({message:'error occured'})
        return
    }
    
    if(rs[0]!=undefined){
        if(rs[0].password==req.body.password){
            res.status(200).json({message:'logged in successfully'})
            return
        }else{
            res.status(200).json({message:'passowrd incorrect'})
            return
        }

    }else{
        res.status(200).json({message:'please enter a valid email'})
        return
    }
    
})



})



app.listen(5050,()=> console.log('server is up and running,,,,..............'))
