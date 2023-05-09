import { pool } from "../data/db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUsu = async (req, res) => {
  try {
    const {
      nombreUSU,
      fechaNacimientoUSU,
      NroDocumentoUSU,
      fotoPerfilUSU,
      usuarioUSU,
      contrasenaUSU,
    } = req.body;
    const passHassh = await bcryptjs.hash(contrasenaUSU, 8);

    if (
      nombreUSU &&
      fechaNacimientoUSU &&
      NroDocumentoUSU &&
      fotoPerfilUSU &&
      usuarioUSU &&
      contrasenaUSU
    ) {
      const [rows] = await pool.query(
        `INSERT INTO tbl_usuarios(nombreUSU,
            fechaNacimientoUSU,
            NroDocumentoUSU,
            fotoPerfilUSU,
            usuarioUSU,
            contrasenaUSU)
             VALUES(?,?,?,?,?,?)
            `,
        [
          nombreUSU,
          fechaNacimientoUSU,
          NroDocumentoUSU,
          fotoPerfilUSU,
          usuarioUSU,
          passHassh,
        ]
      );
      console.log(rows)
      if (rows.affectedRows === 1) {
        res.status(200).json("Registro exitoso");
      } 
      else {
        res.status(400).json("No se pudo registrar este usuario");
      }
    } else {
      res.status(400).json("Por favor ingrese todos los datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const authUsuario = async (req, res) => {
  try {
    const { usuarioUSU, contrasenaUSU } = req.body;

    if (usuarioUSU && contrasenaUSU) {
      const [rows] = await pool.query(
        "SELECT * FROM tbl_usuarios WHERE usuarioUSU=?",
        [usuarioUSU]
      );
      if (
        rows.length === 0 ||
        !(await bcryptjs.compare(contrasenaUSU, rows[0].contrasenaUSU))
      ) {
        res.status(400).json("Usuario y/0 contraseña incorrecta");
      } else {
        const token = jwt.sign(
          { idUsuario: rows[0].idUsuario, nombre: rows[0].nombreUSU },
          "secretKey"
        );
        res.status(200).json({
          token: token,
          idUsuario: rows[0].idUsuario,
          nombreUSU: rows[0].nombreUSU,
        });
      }
    } else {
      res.status(400).json("ingrese todos los campos requeridos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsuario = async (req, res) => {
  try {
    // Actualizar la tabla tbl_casas para marcar la casa como ocupada
    const [rows] = await pool.query(
      "SELECT * FROM tbl_usuarios WHERE idUsuario=? ",
      [req.params.id]
    );

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreUSU, fechaNacimientoUSU, NroDocumentoUSU, fotoPerfilUSU ,usuarioUSU} =
      req.body;
    // Actualizar la tabla tbl_casas para marcar la casa como ocupada
    const [rows] = await pool.query(
      "UPDATE tbl_usuarios SET nombreUSU=?,fechaNacimientoUSU=? ,NroDocumentoUSU=?, fotoPerfilUSU=?,usuarioUSU=?  WHERE idUsuario=? ",
      [nombreUSU, fechaNacimientoUSU, NroDocumentoUSU, fotoPerfilUSU,usuarioUSU, id]
    );

    res.status(200).json("insertado correctamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
