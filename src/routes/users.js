const express =require ('express')
const router=express.Router()
const userController=require('../controllers/users')

router.get('/all',userController.getUser)
router.post('/add',userController.subirImagen)
router.get('/informacion',userController.getInformacion)
router.get('/analisis',userController.getAnalisis)
module.exports=router