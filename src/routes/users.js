const express =require ('express')
const router=express.Router()
const userController=require('../controllers/users')

router.get('/all',userController.getUser)
router.post('/add',userController.subirImagen)
module.exports=router