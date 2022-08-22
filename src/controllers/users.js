//const connection = require ('../connection')
const fs=require('fs-extra')

const path = require('path')
var aux;


const getUser=(req,res)=>{
}



const getFrameTop=(req,res)=>{
    res.render('Frametop');
}
const getFrameIzq=(req,res)=>{
    res.render('FrameIzq');
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
const getUnidad2=(req,res)=>{
    res.render('unidad2')
}
const getUnidad3=(req,res)=>{
    res.render('unidad3')
}
const getUnidad4=(req,res)=>{
    res.render('unidad4')
}
const getUnidad5=(req,res)=>{
    res.render('unidad5')
}
const getBibliografia=(req,res)=>{
    res.render('bibliografia')
}
const getCreditos=(req,res)=>{
    res.render('creditos')
}
const getObjetivo1=(req,res)=>{
    res.render('unid1/obj1')
}
const getRubrica1=(req,res)=>{
    res.render('unid1/rub1')
}
const getPracticas1=(req,res)=>{
    res.render('unid1/practicas1')
}
const getObjetivo2=(req,res)=>{
    res.render('unid2/obj2')
}
const getRubrica2=(req,res)=>{
    res.render('unid2/rub2')
}
const getPracticas2=(req,res)=>{
    res.render('unid2/practicas2')
}
const getObjetivo3=(req,res)=>{
    res.render('unid3/obj3')
}
const getRubrica3=(req,res)=>{
    res.render('unid3/rub3')
}
const getPracticas3=(req,res)=>{
    res.render('unid3/practicas3')
}
const getObjetivo4=(req,res)=>{
    res.render('unid4/obj4')
}
const getRubrica4=(req,res)=>{
    res.render('unid4/rub4')
}
const getPracticas4=(req,res)=>{
    res.render('unid4/practicas4')
}
const getObjetivo5=(req,res)=>{
    res.render('unid5/obj5')
}
const getRubrica5=(req,res)=>{
    res.render('unid5/rub5')
}
const getPracticas5=(req,res)=>{
    res.render('unid5/practicas5')
}


const geta1=(req,res)=>{
    res.render('unid1/a1')
}
const geta11=(req,res)=>{
    res.render('unid1/a1-1')
}
const geta12=(req,res)=>{
    res.render('unid1/a1-2')
}
const geta2=(req,res)=>{
    res.render('unid1/a2')
}
const geta21=(req,res)=>{
    res.render('unid1/a2-1')
}
const geta3=(req,res)=>{
    res.render('unid1/a3')
}
const geta31=(req,res)=>{
    res.render('unid1/a3-1')
}




const getb1=(req,res)=>{
    res.render('unid2/b1')
}
const getb2=(req,res)=>{
    res.render('unid2/b2')
}
const getb21=(req,res)=>{
    res.render('unid2/b2-1')
}
const getb22=(req,res)=>{
    res.render('unid2/b2-2')
}
const getb3=(req,res)=>{
    res.render('unid2/b3')
}
const getb31=(req,res)=>{
    res.render('unid2/b3-1')
}
const getb32=(req,res)=>{
    res.render('unid2/b3-2')
}
const getb4=(req,res)=>{
    res.render('unid2/b4')
}
const getb41=(req,res)=>{
    res.render('unid2/b4-1')
}
const getb42=(req,res)=>{
    res.render('unid2/b4-2')
}
const getb43=(req,res)=>{
    res.render('unid2/b4-3')
}



const getc1=(req,res)=>{
    res.render('unid3/c1')
}
const getc11=(req,res)=>{
    res.render('unid3/c1-1')
}
const getc12=(req,res)=>{
    res.render('unid3/c1-2')
}
const getc2=(req,res)=>{
    res.render('unid3/c2')
}
const getc21=(req,res)=>{
    res.render('unid3/c2-1')
}
const getc22=(req,res)=>{
    res.render('unid3/c2-2')
}
const getc3=(req,res)=>{
    res.render('unid3/c3')
}
const getc31=(req,res)=>{
    res.render('unid3/c3-1')
}




const getd1=(req,res)=>{
    res.render('unid4/d1')
}
const getd11=(req,res)=>{
    res.render('unid4/d1-1')
}
const getd12=(req,res)=>{
    res.render('unid4/d1-2')
}
const getd2=(req,res)=>{
    res.render('unid4/d2')
}
const getd21=(req,res)=>{
    res.render('unid4/d2-1')
}
const getd22=(req,res)=>{
    res.render('unid4/d2-2')
}
const getd3=(req,res)=>{
    res.render('unid4/d3')
}
const getd31=(req,res)=>{
    res.render('unid4/d3-1')
}
const getd32=(req,res)=>{
    res.render('unid4/d3-2')
}
const getd33=(req,res)=>{
    res.render('unid4/d3-3')
}
const getd34=(req,res)=>{
    res.render('unid4/d3-4')
}
const gete1=(req,res)=>{
    res.render('unid5/e1')
}
const gete2=(req,res)=>{
    res.render('unid5/e2')
}
const gete3=(req,res)=>{
    res.render('unid5/e3')
}
const gete4=(req,res)=>{
    res.render('unid5/e4')
}
const getPractice=(req,res)=>{
    res.render('unidadp')
}
const getp1=(req,res)=>{
    res.render('practicas/p1')
}
const getp2=(req,res)=>{
    res.render('practicas/p2')
}
const getp3=(req,res)=>{
    res.render('practicas/p3')
}
const getp4=(req,res)=>{
    res.render('practicas/p4')
}
const getp5=(req,res)=>{
    res.render('practicas/p5')
}
const getp6=(req,res)=>{
    res.render('practicas/p6')
}
const getp7=(req,res)=>{
    res.render('practicas/p7')
}
const getp8=(req,res)=>{
    res.render('practicas/p8')
}
const getp9=(req,res)=>{
    res.render('practicas/p9')
}
const getp10=(req,res)=>{
    res.render('practicas/p10')
}
const getp11=(req,res)=>{
    res.render('practicas/p11')
}
const getp12=(req,res)=>{
    res.render('practicas/p12')
}
const getp13=(req,res)=>{
    res.render('practicas/p13')
}
const getp14=(req,res)=>{
    res.render('practicas/p14')
}



module.exports= {getPractice,getRubrica1,getObjetivo1,getCreditos,getBibliografia,getGlosario,getUnidad1,getProyecto,getPracticas, getUser
    ,getFrameTop,getFrameIzq,getWelcome, getIntro,getObjetivo, getMetodologia, getEvaluacion,
    getPracticas1,getPracticas2,getPracticas3,getPracticas4,getPracticas5,getObjetivo2,getObjetivo3,getObjetivo4,getObjetivo5,
   getRubrica2,getRubrica3,getRubrica4,getRubrica5, getUnidad2, getUnidad3, getUnidad4,getUnidad5,geta1,geta11,geta12,geta2,
   geta21,geta3,geta31,getb1,getb2,getb21,getb22,getb3,getb31,getb32,getb4,getb41,getb42,getb43,getc1,getc11,getc12,getc2,getc21,getc22,getc3,getc31,
   getd1,getd11,getd12,getd2,getd21,getd22,getd3,getd31,getd32,getd33,getd34,gete1,gete2,gete3,gete4,getp1,getp2,getp3,getp4,getp5,
getp6,getp7,getp8,getp9,getp10,getp11,getp12,getp13,getp14}