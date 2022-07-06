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

const getFrameTop=(req,res)=>{
    res.render('Frametop');
}
const getFrameIzq=(req,res)=>{
    res.render('FrameIzq');
}
const getIndice=(req,res)=>{
    res.render('indice');
}
const getWelcome=(req,res)=>{
    res.render('Bienvenida')
}
const getIntro=(req,res)=>{
    res.render('intro')
}
const getObjetivo=(req,res)=>{
    res.render('objetivo')
}
const getMetodologia=(req,res)=>{
    res.render('metodologia')
}
const getEvaluacion=(req,res)=>{
    res.render('evaluacion')
}
const getPracticas=(req,res)=>{
    res.render('practicas')
}
const getProyecto=(req,res)=>{
    res.render('proyecto')
}
const getGlosario=(req,res)=>{
    res.render('glosario')
}
const getUnidad1=(req,res)=>{
    res.render('unidad1')
}
const getBibliografia=(req,res)=>{
    res.render('bibliografia')
}
const getCreditos=(req,res)=>{
    res.render('creditos')
}
module.exports= {getCreditos,getBibliografia,getGlosario,getUnidad1,getProyecto,getPracticas,getAnalisis, getUser, subirImagen,getInformacion,getFrameTop,getFrameIzq,getIndice,getWelcome, getIntro,getObjetivo, getMetodologia, getEvaluacion}