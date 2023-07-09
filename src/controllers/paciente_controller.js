import Paciente from "../models/Paciente.js"


const listarPacientes = (req,res)=>{
    res.send("Listar pacientes")
}
const detallePaciente = (req,res)=>{
    res.send("Detalle del paciente")
}


const registrarPaciente = async(req,res)=>{
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const nuevoPaciente = new Paciente(req.body)
    nuevoPaciente.veterinario=req.body.id
    await nuevoPaciente.save()
    res.status(200).json({msg:"Registro exitoso del paciente"})
}


const actualizarPaciente = (req,res)=>{
    res.send("Actualizar paciente")
}
const eliminarPaciente = (req,res)=>{
    res.send("Eliminar paciente")
}

export {
    listarPacientes,
    detallePaciente,
    registrarPaciente,
    actualizarPaciente,
    eliminarPaciente
}