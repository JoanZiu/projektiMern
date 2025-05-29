const express = require('express');
const itemModel=require('../model/item');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app=express();

//Konfigurime
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
    cb(null, 'images'); 
    }, 
    filename: function (req, file, cb) { 
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname)) 
    } 
    }) 
    const fileFilter = (req, file, cb) => { 
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']; 
    if (allowedFileTypes.includes(file.mimetype)) { 
    cb(null, true) 
    } else { 
    cb(null, false) 
    }} 
    let upload = multer({ storage, fileFilter })


    //CRUDI
    //CREATE
    app.post("/createItem/",upload.single("itemImage"),async (req,res)=>{
        try{
            const newItem = new itemModel({
    ...req.body,
    itemImage: req.file ? req.file.filename : null,
});
            await newItem.save()
            res.status(200).send(newItem);
        }catch(err){
            console.log(err);
            res.status(500).json("Not added");
        }
    })
    //READ-ALL
    app.get("/readAllItem/",async (req,res)=>{
        try{
          const allItems=await itemModel.find({isPublic:true});
            res.status(200).send(allItems);
        }catch(err){
            console.log(err);
            res.status(500).json("Not read all");
        }
    })
    //READ-ONE
    app.get("/readOneItem/:id/",async (req,res)=>{
        try{
            const idItem=req.params.id;
          const oneItem=await itemModel.findById({_id:idItem});
            res.status(200).send(oneItem);
        }catch(err){
            console.log(err);
            res.status(500).json("Not read ");
        }
    })
    //UPDATE
    app.patch("/updateItem/:id/",upload.single("itemImage"),async(req,res)=>{
        try{
            const idItem=req.params.id;
            const itemInfo={...req.body};
            if(req.file){ 
                const dergo = async(e) => {
                e.preventDefault();
                 setShowMessage(true);
                await axios.post("http://localhost:5000/createContact/", newContact)
                .then(response => console.log(response.data))
                .catch(error => console.error("Error:", error));
                
              };
                itemInfo.itemImage=req.file.filename;
            }
            const updateItem=await itemModel.findByIdAndUpdate({_id:idItem},{$set:itemInfo},{new:true});
            res.status(200).send(updateItem);
        }
        catch(err){
            console.log(err);
            res.status(500).json("Not updated");
        }
    })
    //DELETE
    app.delete("/deleteItem/:id/",async (req,res)=>{
        try{
            const idItem=req.params.id;
          const oneItem=await itemModel.deleteOne({_id:idItem});
            res.status(200).send("Deleted item");
        }catch(err){
            console.log(err);
            res.status(500).json("Not deleted");
        }
    })


module.exports=app;