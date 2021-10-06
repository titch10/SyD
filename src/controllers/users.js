//const connection = require ('../connection')

const User = require('../models/users')
const Admin = require('../models/admin')
const jwk = require ('jsonwebtoken')
const bcrypt = require ('bcrypt')

var texto=new Array()
var contador =0
texto[0] = "El mato a un policia motorizado: banda de indie rock con origen en la ciudad de La Plata, Argentina";
texto[1] = "Ligas menores: banda de indie rock argentina.";
texto[2] = "Pixies: es una banda de rock alternativo formada en 1986 en la ciudad de Boston, Estados Unidos.​";
texto[3] = "Reyno: Es una banda mexicana formada a finales de 2012.";


function mostrardos(){

    if((contador+1) > 3) {
     
	} else {
		contador++
	}

    var parrafo = document.getElementById("parrafo");
   
    var textod = texto[contador]
    
    parrafo.innerHTML = textod
 }

const getAdmin = (req, res)=>{
    Admin.find({}, (err, result)=>{
        if (err) {
            console.log('ha ocurrido un error')
        }else{
            console.log(result)
            res.render('admins',{admins:result})
        }
  })
}


const login = (req, res)=>{
    Admin.findOne({email:req.body.email} ,(err, result)=>{
        if (err) {
            console.log('ha ocurrido un error'+err)
        }else{
            if(result){
               if(bcrypt.compareSync(req.body.password, result.password)){
                          //console.log('Contraseña correcta')
                          jwk.sign({Admin:result},'secret-key',(err,token)=>{
                               res.send({token:token})
                          })
                   }
                   else{
                          console.log('Contraseña incorrecta')
                   }
            }else{
                console.log('Usuario no encontrado')
            }
        }
 })
}

const getcreateAdmin=(req,res)=>{
    res.redirect('')
}

const register = (req, res)=>{
     const admin= new Admin({
         name: req.body.name,
         email: req.body.email,
         password: bcrypt.hashSync(req.body.password,10)
     })
     admin.save((err,result)=>{
         if(err)
         {
            res.send('Ha ocurrido un error'+err)
         }else{
            console.log('Usuario registrado')
            res.redirect('/')
         }
     })
}


const getUser=(req,res)=>{
    //const sql ='select * from users'
    User.find({}, (err, result)=>{
          if (err) {
              console.log('ha ocurrido un error')
          }else{
              console.log(result)
              res.render('users',{users:result})
          }
    })
}
const getCreateUser=(req,res)=>{
        res.render('create-user')
}

const getPregunta=(req,res)=>{
    res.render('pregunta')
}
const getBye=(req,res)=>{
    res.render('despedida')
}
const getUpdateUser=(req,res)=>{
    const param = req.params.id
    //const sql= 'select * from users where id=?'
    User.find({_id:param} ,(err, result)=>{
           if (err) {
               console.log('ha ocurrido un error'+err)
           }else{
               console.log(result)
               res.render('update-user',{user:result})
           }
    })
}
const getDeleteUser=(req,res)=>{
    const param = req.params.id
    //const sql= 'select * from users where id=?'
    User.find({_id:param},(err, result)=>{
           if (err) {
               console.log('ha ocurrido un error'+err)
           }else{
               console.log(result)
               res.render('delete-user',{user:result})
           }
    })
}

const createUser = (req,res)=>{
    //const sql='insert into users SET ?'
    
    const data= req.body
    const user = new User({
        name: data.name
    })

    user.save((err, result)=>{
            if (err) {
                console.log(err)
            }else{
                console.log('Usuario registrado')
                res.redirect('/')
            }
    })
    //res.render('users',{users:users})
}
const updateUser = (req,res)=>{
    const param=req.params.id
    //const sql = `update users SET name='${req.body.name}', age='${req.body.age}' where id='${param}'`
    const data = req.body

    User.findOneAndUpdate({_id:param},data,(err,result)=>{
        if(err){
            console.log('ha ocurrido un error'+err)
        }else{
            console.log('usuario actualizado')
            res.redirect('/users/all')
        }
    })
}
const deleteUser = (req,res)=>{
    const param=req.params.id
    //const sql = `delete from users where id='${param}'`
    //aca va connection.query
    User.deleteOne({_id:param},(err,result)=>{
        if(err){
            console.log('ha ocurrido un error'+err)
        }else{
            console.log('usuario actualizado')
            res.redirect('/users/all')
        }
    })
}



module.exports= {mostrardos,getBye,getUser,getPregunta, getCreateUser, getUpdateUser, getDeleteUser, createUser, updateUser, deleteUser, getAdmin, login, register, getcreateAdmin}