import { pool } from "../data/db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const getadmin = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT *
    FROM tbl_adminsitradores
    `);
    if (rows) {
      res.json(rows);
    } else {
      res.status(200).json("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAdmin = async (req, res) => {
  try {
    const { nombre, usuario, contrasena } = req.body;
    let passHaas = await bcryptjs.hash(contrasena, 8);

    if (nombre && usuario && contrasena) {
      const [rows] = await pool.query(
        "INSERT INTO tbl_adminsitradores(nombre,usuario,contrasena) VALUES(?,?,?)",
        [nombre, usuario, passHaas]
      );
      if (rows.affectedRows == 1) {
        res.json("Registro exitoso");
      } else {
        res.json("No se pudo registrar este usuario");
      }
    } else {
      res.json("Por favor ingrese todos los datos");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const authAdmin = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;

    if (usuario && contrasena) {
      const [rows] = await pool.query(
        "SELECT * FROM tbl_adminsitradores WHERE usuario=?",
        [usuario]
      );
      if (
        rows.length === 0 ||
        !(await bcryptjs.compare(contrasena, rows[0].contrasena))
      ) {
        res.status(400).json("Usuario y/0 contraseña incorrecta");
      } else {
        const token = jwt.sign(
          {
            idAdministradores: rows[0].idAdministradores,
            nombre: rows[0].nombre,
          },
          "secretKey"
        );
        res.status(200).json(token);
      }
    } else {
      res.status(200).json("ingrese todos los campos requeridos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
