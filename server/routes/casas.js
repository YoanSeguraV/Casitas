import {Router} from 'express'
import { actualizarCasa, agreagarCasa, arrendarCasa, casaArrendadaUsuario, CasaDisponible, CasasAlquiladas, CasasDisponibles, CasasDisponiblesZona, CasasInhabilitadas } from '../controllers/casas.js'

const router=Router()

router.get("/casasdisponibles",CasasDisponibles)
router.get("/casasdisponiblesZona",CasasDisponiblesZona)
router.get("/casasocupadas",CasasAlquiladas)
router.get("/casasinhabilitadas",CasasInhabilitadas)
router.post("/agregandocasa",agreagarCasa)
router.patch("/arrendar",arrendarCasa)
router.get("/arrendar/:id",casaArrendadaUsuario)

router.get("/casasdisponibles/:id",CasaDisponible)
router.patch("/casasestado/:id",actualizarCasa)

export default router;