//const mysql =require('mysql')
const mongoose = require('mongoose')
const { mongodb } = require('./config')

const connection = mongoose.connect(`mongodb+srv://chat:chat@chat.qfcap.mongodb.net/chat?retryWrites=true&w=majority`)
.then((db)=> {
    console.log('Conexión exitosa')
}).catch((err)=> {
    console.log('Ha ocurrido un error: ', + err)
})

/*const connection = mysql.createConnection(mysql_database)
connection.connect((err, conn)=>{
    if (err) {
        console.log('ha ocurrido un error al conectarse')
    }else{
        console.log('conexion exitosa')
        return conn
    } 
})*/

module.exports = connection