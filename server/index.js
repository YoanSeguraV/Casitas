import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/casas.js'
import adminRoutes from './routes/admin.js'
import usuariosRoutes from './routes/usuarios.js'
import morgan from 'morgan'
const app=express()


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes)
app.use(adminRoutes)
app.use(usuariosRoutes)
app.listen(4000)
console.log("server listening on port " + 4000)