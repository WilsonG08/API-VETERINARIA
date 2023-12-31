// Reaalizar importaciones
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import routerVeterinarios from './routers/veterinario_routes.js'
import routerPacientes from './routers/paciente_routes.js'



//Inicializar Express en la vatiable app
const app = express()
dotenv.config()


// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())


// Middlewares 
app.use(express.json())


// Variables globales


// Rutas 
app.use('/api',routerVeterinarios)
app.use('/api',routerPacientes)

app.get('/',(req,res)=>{
    res.send("Server on")
})


// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


// Una exportacion de la variable app
export default  app