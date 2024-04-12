const mongoose=require('../config/database')

const servicios=new mongoose.Schema({
    nombre:{
        type:String,
        require:[true,"el nombre del servicio es requerido"]
    },
    duracion:{
        type:String,
        require:[true,"la duracion del servicio es requerido"]
    },
    descripcion:{
        type:String,
        
    },
    precio:{
        type:Number,
        require:[true,"el precio del servicio es requerido"],
        min:0
    },
    disponibilidad:{
        type:String,

    }
})
const servicio=mongoose.model("servicio",servicios)
module.exports=servicio