import {Router} from 'express'
import { authAdmin, createAdmin, getadmin } from '../controllers/LoginAdmin.js';


const router=Router()

router.get("/admin",getadmin)
router.post("/creteadmin",createAdmin)
router.post("/login",authAdmin)


export default router;