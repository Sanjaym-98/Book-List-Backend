const router = require('express').Router();
const model = require('../Model/bookmodel');
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));

router.post("/book",async(req,res)=>{
    try{
        const data = {
            title:req.body.title,
            isbn:req.body.isbn,
            author:req.body.author,
            description:req.body.description,
            publish:req.body.publish,
            publisher:req.body.publisher
        }
        const user= await model.create(data);
        res.status(200).json({
            status:"success",
            message:"POST Done successfuly",
            user
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})

router.get("/book",async(req,res)=>{
    try{    
        const user =await model.find({})
        console.log(user)
        res.status(201).json({
            status:"Success",
            message:user
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})

router.get("/book/:id",async(req,res)=>{
    try{
const data = await model.find({_id:req.params.id});
console.log(data)
        res.status(201).json({
            status:"success",
            data
        })

    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})

router.put("/book/:id",async(req,res)=>{
    try{
        const data = await model.updateOne({_id:req.params.id},req.body)
        res.status(201).json({
            status:"Success",
            data
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})

router.delete("/book/:id", async(req,res)=>{
    try{    
        const data = await model.deleteOne({_id:req.params.id})
        res.status(201).json({
            status:"Success",
            data
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})



module.exports = router