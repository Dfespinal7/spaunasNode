const mongoose=require('../config/database')

const servicios=new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"el nombre del servicio es requerido"]
    },
    duracion:{
        type:String,
        required:[true,"la duracion del servicio es requerido"]
    },
    descripcion:{
        type:String,
        
    },
    precio:{
        type:Number,
        required:[true,"el precio del servicio es requerido"],
        min:0
    },
    disponibilidad:{
        type:String,

    }
})
const servicio=mongoose.model("servicio",servicios)
module.exports=servicio