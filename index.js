const exp=require('express')
const app=exp()
const path=require('path')

app.set('views',path.join(__dirname,'./views'));
app.use(exp.static('./static/'))
app.set('view engine','ejs')
app.get('/prueba',(req,res)=>{
    res.send("hola mundo dev")
})
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let modelcita=require('./models/citas');
let modelusuario=require('./models/usuarios')
let modelempleado=require('./models/emeplados')
let modelservicio=require('./models/servicios')
let modelpagos=require('./models/pagos')


app.get('/inicio',(req,res)=>{
    res.render('inicio')
})
app.get('/contacto',(req,res)=>{
    res.render('contactos/contacto')
})
app.get('/empleados',async(req,res)=>{
    
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
app.get('/listar_usuario',async(req,res)=>{
    let listarusurio=await modelusuario.find()
    if(listarusurio)
        res.render('usuarios/listar_usuario',{
            "listarusuario":listarusurio
        })
    else
        res.status(404).json({error:"no se encontraron usuarios"})
})

app.get('/login',(req,res)=>{
    res.render('usuarios/loguin')
})

app.get('/adminempleado',async(req,res)=>{
    let listarempleado=await modelempleado.find()
    res.render('empleados/listar_empleado',
    {
        "listarempleado":listarempleado
    })
})

app.get('/form_citas',async(req,res)=>{
    let listarusario=await modelusuario.find()
    let listarempleado=await modelempleado.find()
    let listarservicio=await modelservicio.find()
    res.render('citas/form_citas',{
        "listarusuario":listarusario,
        "listarempleado":listarempleado,
        "listarservicio":listarservicio
    })
})

app.get('/listar_servicio',async(req,res)=>{
    let listarservicio=await modelservicio.find()
    res.render('servicios/listar_servicios',{
        "listarservicio":listarservicio
    })
})

app.get('/form_servicio',(req,res)=>{
    res.render('servicios/form_servicio')
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

app.post('/guardar_usuario',async(req,res)=>{
    const nuevousuario={
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        contacto:req.body.contacto,
        email:req.body.email,
        username:req.body.username,
        contra:req.body.contra,
        rol:req.body.rol,
    }
    let insercion=await modelusuario.create(nuevousuario);
    if(insercion)
        res.status(200).json({"mensaje":"usuario creado correctamente"})
    else
        res.status(400).json({"mensaje":"se presento un error"})

})
app.post('/guardar_empleado',async(req,res)=>{
    const nuevoempleado={
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        contacto:req.body.contacto,
        email:req.body.email,
        fechanacimiento:req.body.fechaNacimiento,
        cargo:req.body.cargo,
        salario:req.body.salario,

    }
    let insercion=await modelempleado.create(nuevoempleado)
    if(insercion)
        res.status(200).json({"mensaje":"empleado creado correctamente"})
    else
        res.status(400).json({"mensaje":"se presento un error"})
})
app.post('/guardar_servicio',async(req,res)=>{
    const nuevoservicio={
        nombre:req.body.nombre,
        duracion:req.body.duracion,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        disponibilidad:req.body.disponibilidad,
    }
    let insercion=await modelservicio.create(nuevoservicio)
    if(insercion)
        res.status(200).json({"mensaje":"servicio creado correctamente"})
    else
        res.status(400).json({"mensaje":"se presento un error"})
})

app.listen(8080,()=>{
    console.log('servidor en linea')
})