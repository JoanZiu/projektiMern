//Importimi
const express=require('express');
const mongoose=require('mongoose');
const contactRoute=require('./routes/contactRoute');
const cors=require('cors');
const session=require('express-session');
const itemRoute=require('./routes/itemRoute.js');
const honourRoute=require('./routes/honoursRoute.js');
const path = require('path');
const itemModel=require('./model/item');
//Therritja
const app=express();
 app.use(cors());

 app.use(session({
    secret: "This will be secret", 
   resave: false, 
   saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24}})); 
app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images"))); 

//Lidhja me MongoDB
mongoose.connect("mongodb+srv://ziujoan:Cheatengine6.2@cluster0.3i7an15.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{
    console.log("Lidhja me MongoDB eshte e suksesshme");
}).catch((err) => {
    console.log (err);
});
app.use(contactRoute);
app.use(itemRoute);
app.use(honourRoute);
app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  try {
    const results = await itemModel.find({
      itemName: { $regex: query, $options: "i" },
    });
    console.log(results);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


//Krijimi i serverit
app.listen("5000",()=>{
    console.log("Serveri eshte aktiv ne portin 5000");
}


)
