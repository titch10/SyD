//const connection = require ('../connection')
const fs=require('fs-extra')

const path = require('path')
let{PythonShell} = require('python-shell')
var aux;


const getUser=(req,res)=>{
}

const getInformacion=async (req,res)=>{
    await res.render('info')
}
const subirImagen= async(req,res)=>{
    console.log(req.file);
    await PythonShell.run("src/app.py",null,function(err,results){
        
        aux=results[0]
        console.log(aux)
        fs.unlink(req.file.path);
    })
    await res.redirect('/users/analisis');
}
const getAnalisis= (req,res)=>{
   res.render('analisis',{aux});
}

module.exports= {getAnalisis,getUser, subirImagen,getInformacion}