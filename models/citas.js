const mongoose=require('../config/database')
const citas=new mongoose.Schema({
    usuario:{
        type:String,
        require:[true,"obliga usuario"]
    },
    fecha:{
        type:Date,
        required:[true,"la fecha es obligatoria"]
    },
    lugar:{
        type:String,
        required:[true,"el lugar  es obligatoria"]

    },
    hora:{
        type:String,
        required:[true,"la hora obligatoria"]
    },
    servicio:{
        type:String,
        required:[true,"el servicio es obligatoria"]
    },
    empleado:{
        type:String,
        required:[true,"el empleado es obligatoria"]
    }
})
const cita=mongoose.model("citas",citas)
module.exports=cita