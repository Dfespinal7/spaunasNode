const { model, default: mongoose } = require('mongoose')
const mogoose=require('../config/database')

const empleados= new mogoose.Schema({
    nombre:{
        type:String,
        require:[true,"el nombre del empleado es requerido"]
    },
    apellido:{
        type:String,
        require:[true,"el apellido del empleado es requerido"]
    },
    contacto:{
        type:String,
        require:[true,"el contacto del empleado es requerido"]
    },
    email:{
        type:String,
        require:[true,"el contacto del empleado es requerido"],
        unique:[true,"el correo es unico"]
    },
    fechaNacimiento:{
        type:Date,
        require:[true,"la fecha de nacimiento es requerida"],
    },
    cargo:{
        type:String,
        require:[true,"el cargo del empleado es requerido"]
    },
    salario:{
        type:String,
        require:[true,"el salario es requerido"]
    }
})
 const empleado=mongoose.model("empleado",empleados)
 module.exports=empleado