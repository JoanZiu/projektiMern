//Importimi
const express=require('express');
const mongoose=require('mongoose');
const contactRoute=require('./routes/contactRoute');
const cors=require('cors');
const session=require('express-session');


//Therritja
const app=express();
 app.use(cors());

 app.use(session({
    secret: "This will be secret", 
   resave: false, 
   saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24}})); 
app.use(express.json({ limit: "1000mb", extended: true }));

//Lidhja me MongoDB
mongoose.connect("mongodb+srv://ziujoan:Cheatengine6.2@cluster0.3i7an15.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{
    console.log("Lidhja me MongoDB eshte e suksesshme");
}).catch((err) => {
    console.log (err);
});
app.use(contactRoute);
//Krijimi i serverit
app.listen("5000",()=>{
    console.log("Serveri eshte aktiv ne portin 5000");
}


)
