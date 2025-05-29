const express = require('express');
const HonourModel=require('../model/honours');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app=express();

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
    cb(null, 'images'); 
    }, 
    filename: function (req, file, cb) { 
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname)) 
    } 
    }) 
    const fileFilter = (req, file, cb) => { 
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png','image/webp']; 
    if (allowedFileTypes.includes(file.mimetype)) { 
    cb(null, true) 
    } else { 
    cb(null, false) 
    }} 
    let upload = multer({ storage, fileFilter })

    app.post("/createHonour/",upload.single("HonourImage"),async (req,res)=>
        {        
            try{
            const newHonour= new HonourModel({
                ...req.body,
                HonourImage: req.file ? req.file.filename : null,
            });
             await newHonour.save()
            res.status(200).send(newHonour);
        }catch(err){
            console.log(err);
            res.status(500).json("Not added");
        }
    })

    app.get("/readAllHonour/",async(req,res)=>{
        try{
            const allHonours=await HonourModel.find();
            res.status(200).send(allHonours);
        }
        catch(err){
            console.log(err);
            res.status(500).json("Not read all");
        }
    })

    app.patch("/updateHonour/:id",upload.single("HonourImage"),async(req,res)=>{
        try{
            const idHonour=req.params.id;
            const HonourInfo={...req.body};
            if(req.file){ 
                const dergo = async(e) => {
                e.preventDefault();
                await axios.post("http://localhost:5000/createHonour/", newHonour)
                .then(response => console.log(response.data))
                .catch(error => console.error("Error:", error));
                
              };
                    HonourInfo.HonourImage=req.file.filename;
            }
            const updateHonour=await HonourModel.findByIdAndUpdate({_id:idHonour },{$set:HonourInfo},{new:true});
            res.status(200).send(updateHonour);
        }catch(err){
            console.log(err);
            res.status(500).json("Not updated");
        }
    })
    app.delete("/deleteHonour/:id/",async (req,res)=>{
            try{
                const idHonour=req.params.id;
              const oneHonour=await HonourModel.deleteOne({_id:idHonour});
                res.status(200).send("Deleted item");
            }catch(err){
                console.log(err);
                res.status(500).json("Not deleted");
            }
        })
        app.get("/readOneHonour/:id/",async (req,res)=>{
                try{
                    const idItem=req.params.id;
                  const oneHonour=await HonourModel.findById(idItem);
                    res.status(200).send(oneHonour);
                }catch(err){
                    console.log(err);
                    res.status(500).json("Not read ");
                }
            })
    
    module.exports = app