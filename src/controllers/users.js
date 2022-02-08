//const connection = require ('../connection')
const fs=require('fs-extra')

const path = require('path')
let{PythonShell} = require('python-shell')



const getUser=(req,res)=>{
    
}
const subirImagen= async(req,res)=>{
    console.log(req.file);
    await PythonShell.run("src/app.py",null,function(err,results){
        console.log(results)
        console.log("python script finished")
    })
    await fs.unlink(req.file.path)
    res.send('uploaded');
}

module.exports= {getUser, subirImagen}