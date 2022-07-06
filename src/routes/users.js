const express =require ('express')
const router=express.Router()
const userController=require('../controllers/users')

router.get('/all',userController.getUser)
router.post('/add',userController.subirImagen)
router.get('/informacion',userController.getInformacion)
router.get('/analisis',userController.getAnalisis)
router.get('/indice',userController.getIndice)




router.get('/frameizq',userController.getFrameIzq)
router.get('/welcome',userController.getWelcome)
router.get('/frametop',userController.getFrameTop)
router.get('/intro',userController.getIntro)
router.get('/objetivo',userController.getObjetivo)
router.get('/metodologia',userController.getMetodologia)




module.exports=router