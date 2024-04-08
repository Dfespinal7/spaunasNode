
const mongoose=require('../config/database')

const usuarios=new mongoose.Schema({
    nombre:{
        type:String,
        require:[true,'se requiere nombre']
    },
    apellido:{
        type:String,
        require:[true,'se requiere apellido']
    },
    contacto:{
        type:String
        
    },
    email:{
        type:String,
        
        required: [true, "El correo electrónico es obligatorio"] 
    },
    username:{
        type:String,
        
        required: [true, "El correo electrónico es obligatorio"] 
    },
    contra:{
        type:String,
        required: [true, "la contraseña es obligatoria"] 
    },
    rol:{
        type:String,
        required: [true, "el rol es obligatorio"] 
    },
})
const usuario=mongoose.model("usuario",usuarios)
module.exports=usuario