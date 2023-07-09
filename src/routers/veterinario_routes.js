// Hacemos la importacion de la funcion Router por parte de express
import {Router} from 'express'
// Inicializar la funcion en la variable router
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()

import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";



router.post('/login',login)
router.post('/registro',registro)
router.get('/confirmar/:token',confirmEmail)
router.get('/veterinarios',listarVeterinarios)
router.post('/recuperar-password',recuperarPassword)
router.get('/recuperar-password/:token',comprobarTokenPasword)
router.post('/nuevo-password/:token',nuevoPassword)

router.get('/perfil',verificarAutenticacion,perfil)
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.get('/veterinario/:id',verificarAutenticacion,detalleVeterinario)
router.put('/veterinario/:id',verificarAutenticacion,actualizarPerfil)

// Exportar la variable router
export default router

