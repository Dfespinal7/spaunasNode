const mongoose=require('../config/database')

const pagos=new mongoose.Schema({
    usuario:{
        type:String,
        required:[true,"se requiere nombre de pago"]
    },
    fechaPago:{
        type:Date,
        required:[true,"se requiere fecha de pago"]
    },
    monto:{
        type:Number,
        required:[true,"se requiere monto de pago"]
    },
    estadoPago:{
        type:String,
        required:[true,"se requiere estado de pago"]
    },
    servicio:{
        type:String,
        required:[true,"se requiere servicio de pago"]
    }
})
const pagos1=mongoose.model("pago",pagos)
module.exports=pagos1