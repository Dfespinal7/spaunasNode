const mongoose=require('../config/database')
const citas=new mongoose.Schema({
    usuario:{
        type:String,
        require:[true,"obliga usuario"]
    },
    fecha:{
        type:String,
        require:[true,"la fecha es obligatoria"]
    },
    lugar:{
        type:String,
        require:[true,"el lugar  es obligatoria"]

    },
    hora:{
        type:String,
        require:[true,"la hora obligatoria"]
    },
    servicio:{
        type:String,
        require:[true,"el servicio es obligatoria"]
    },
    empleado:{
        type:String,
        require:[true,"el empleado es obligatoria"]
    }
})
const cita=mongoose.model("citas",citas)
module.exports=cita