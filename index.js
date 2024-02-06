require("dotenv").config();
const express=require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const cookieParser = require("cookie-parser");
const databaseinstance = require('./configuration/db');
const std=require('./models/user');
const mongoose=require('mongoose');
const expressesion=require('express-session');
const session = require("express-session");

const studentController=require('./controllers/studentController');

const app=express();
app.use(express.urlencoded({
    extended:false
}));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  
  app.use(cors(corsOptions));

  
app.use(express.json());

app.use('/Students', express.static(path.join(__dirname, 'Students')));

// Endpoint to get image paths
app.get('/Get-Images', async(req, res) => {

  const {rollno}=req.query;


  const imageFolder = path.join(__dirname, 'Students');
  try {
    const student = await studentController.getStudentBYRollNo(rollno);

    if (student && student.Image) {
        const Imgurl = `http://localhost:5000/Students/${student.Image}`;
        res.send(Imgurl);
    } else {
        res.send("Image not found");
    }
} catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).send("Internal Server Error");
}
  

});





app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 60 * 60 * 24,
  },
 
}));
app.use(cookieParser());

app.use((req,res,next)=>
{
res.locals.message=req.session.message;
delete req.session.message;

next();
});

app.set('view-engine','ejs');


app.use("",require('./routers/routes'));

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>
{

    
console.log("fsdfsdf");

});


