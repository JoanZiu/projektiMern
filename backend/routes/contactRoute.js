const express = require('express');
const app = express();
const contactModel=require('../model/contact');

app.post("/createContact/", async (req, res) => {
    try{
        console.log(req.body);
       const newContact=new contactModel(req.body);
       await newContact.save();
       res.status(200).send(newContact);
    }catch(err){
        //Terminal
        console.log(err);
        //Browser
        res.status(500).json({message: "Server error"});
    }
});








module.exports = app