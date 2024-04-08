const exp=require('express')
const app=exp()
const path=require('path')

app.set('views',path.join(__dirname,'./views'));
app.use(exp.static('./static/'))
app.set('view engine','ejs')
app.get('/prueba',(req,res)=>{
    res.send("hola mundo dev")
})

let modelcita=require('./models/citas')

app.get('/inicio',(req,res)=>{
    res.render('inicio')
})
app.get('/contacto',(req,res)=>{
    res.render('contactos/contacto')
})
app.get('/empleados',(req,res)=>{
    res.render('empleados/empleados')
})

app.get('/servicios',(req,res)=>{
    res.render('servicios/servicios')
})
app.get('/listar_citas',async(req,res)=>{
    let listarcita=await modelcita.find()
    if (listarcita)
        res.render('citas/listar_cita',{
        "listarcita":listarcita})
    else
        res.status(404).json({error:"no se encontraron citas"})
})

app.get('/login',(req,res)=>{
    res.render('usuarios/loguin')
})

app.get('/adminempleado',(req,res)=>{
    res.render('empleados/listar_empleado')
})

app.get('/form_citas',(req,res)=>{
    res.render('citas/form_citas')
})

app.get('/listar_servicio',(req,res)=>{
    res.render('servicios/listar_servicios')
})

app.get('/form_servicio',(req,res)=>{
    res.render('servicios/form_servicio')
})

app.get('/listar_usuario',(req,res)=>{
    res.render('usuarios/listar_usuario')
})

app.get('/form_usuario',(req,res)=>{
    res.render('usuarios/form_usuario')
})

app.get('/listar_pagos',(req,res)=>{
    res.render('pagos/listar_pagos')
})
app.get('/form_pagos',(req,res)=>{
    res.render('pagos/form_pagos')
})

app.get('/form_empleado',(req,res)=>{
    res.render('empleados/form_empleado')
})

app.get('/agendar_cita',(req,res)=>{
    res.render('citas/agendar_cita')
})

app.get('/registro',(req,res)=>{
    res.render('usuarios/registro')
})

app.get('/mis_citas',(req,res)=>{
    res.render('citas/mis_citas')
})


app.post('/guardar_cita',async(req,res)=>{
    const nuevacita={
        usuario:req.body.usuario,
        fecha:req.body.fecha,
        lugar:req.body.lugar,
        hora:req.body.hora,
        servicio:req.body.servicio,
        empleado:req.body.empleado,

    }
    
    let insercion=await modelcita.create(nuevacita);
    if(insercion)
        res.status(200).json({"mensaje":"cita guardada"})
    else
        res.status(400).json({"mensaje":"se presentó un error"})
})

app.listen(8080,()=>{
    console.log('servidor en linea')
})