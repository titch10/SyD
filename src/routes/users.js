const express =require ('express')
const router=express.Router()
const userController=require('../controllers/users')

router.get('/all',userController.getUser)




router.get('/frameizq',userController.getFrameIzq)
router.get('/welcome',userController.getWelcome)
router.get('/frametop',userController.getFrameTop)
router.get('/intro',userController.getIntro)
router.get('/objetivo',userController.getObjetivo)
router.get('/metodologia',userController.getMetodologia)
router.get('/evaluacion',userController.getEvaluacion)
router.get('/practicas',userController.getPracticas)
router.get('/proyecto',userController.getProyecto)
router.get('/glosario',userController.getGlosario)
router.get('/bibliografia',userController.getBibliografia)
router.get('/creditos',userController.getCreditos)



router.get('/unidad1',userController.getUnidad1)
router.get('/obj1',userController.getObjetivo1)
router.get('/rub1',userController.getRubrica1)
router.get('/practicas1',userController.getPracticas1)
router.get('/a1',userController.geta1)
router.get('/a1-1',userController.geta11)
router.get('/a1-2',userController.geta12)
router.get('/a2',userController.geta2)
router.get('/a2-1',userController.geta21)
router.get('/a3',userController.geta3)
router.get('/a3-1',userController.geta31)


router.get('/unidad2',userController.getUnidad2)
router.get('/obj2',userController.getObjetivo2)
router.get('/rub2',userController.getRubrica2)
router.get('/practicas2',userController.getPracticas2)
router.get('/b1',userController.getb1)
router.get('/b2',userController.getb2)
router.get('/b2-1',userController.getb21)
router.get('/b2-2',userController.getb22)
router.get('/b3',userController.getb3)
router.get('/b3-1',userController.getb31)
router.get('/b3-2',userController.getb32)
router.get('/b4',userController.getb4)
router.get('/b4-1',userController.getb41)
router.get('/b4-2',userController.getb42)
router.get('/b4-3',userController.getb43)

router.get('/unidad3',userController.getUnidad3)
router.get('/obj3',userController.getObjetivo3)
router.get('/rub3',userController.getRubrica3)
router.get('/practicas3',userController.getPracticas3)
router.get('/c1',userController.getc1)
router.get('/c1-1',userController.getc11)
router.get('/c1-2',userController.getc12)
router.get('/c2',userController.getc2)
router.get('/c2-1',userController.getc21)
router.get('/c2-2',userController.getc22)
router.get('/c3',userController.getc3)
router.get('/c3-1',userController.getc31)

router.get('/unidad4',userController.getUnidad4)
router.get('/obj4',userController.getObjetivo4)
router.get('/rub4',userController.getRubrica4)
router.get('/practicas4',userController.getPracticas4)
router.get('/d1',userController.getd1)
router.get('/d1-1',userController.getd11)
router.get('/d1-2',userController.getd12)
router.get('/d2',userController.getd2)
router.get('/d2-1',userController.getd21)
router.get('/d2-2',userController.getd22)
router.get('/d3',userController.getd3)
router.get('/d3-1',userController.getd31)
router.get('/d3-2',userController.getd32)
router.get('/d3-3',userController.getd33)
router.get('/d3-4',userController.getd34)



router.get('/unidad5',userController.getUnidad5)
router.get('/obj5',userController.getObjetivo5)
router.get('/rub5',userController.getRubrica5)
router.get('/practicas5',userController.getPracticas5)
router.get('/e1',userController.gete1)
router.get('/e2',userController.gete2)
router.get('/e3',userController.gete3)
router.get('/e4',userController.gete4)

router.get('/practice',userController.getPractice)
router.get('/p1',userController.getp1)
router.get('/p2',userController.getp2)
router.get('/p3',userController.getp3)
router.get('/p4',userController.getp4)
router.get('/p5',userController.getp5)
router.get('/p6',userController.getp6)
router.get('/p7',userController.getp7)
router.get('/p8',userController.getp8)
router.get('/p9',userController.getp9)
router.get('/p10',userController.getp10)
router.get('/p11',userController.getp11)
router.get('/p12',userController.getp12)
router.get('/p13',userController.getp13)
router.get('/p14',userController.getp14)

module.exports=router