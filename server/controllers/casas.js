import { pool } from "../data/db.js";

export const CasasDisponibles = async (req, res) => {
  try {
    const [rows] =
      await pool.query(`SELECT idcasa, direccionCAS, tipoCAS, costoCAS, NrPisosCAS, descripcionCAS, capacidadCAS, zonaCAS, desactivadaCAS, disponibleCAS, ocupadaCAS
    FROM tbl_casas
    WHERE disponibleCAS =1 `);
    if (rows) {
      res.json(rows);
    } else {
      res.status(200).json("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CasasDisponiblesZona = async (req, res) => {
  try {
    const { zonaCAS } = req.body;
    const [rows] = await pool.query(
      `SELECT idcasa, direccionCAS, tipoCAS, costoCAS, NrPisosCAS, descripcionCAS, capacidadCAS, zonaCAS, desactivadaCAS, disponibleCAS, ocupadaCAS
    FROM tbl_casas
    WHERE disponibleCAS =1  AND zonaCAS=?`,
      [zonaCAS]
    );
    if (rows) {
      res.json(rows);
    } else {
      res.status(200).json("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CasaDisponible = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT idcasa, direccionCAS, tipoCAS, costoCAS, NrPisosCAS, descripcionCAS, capacidadCAS, zonaCAS, desactivadaCAS, disponibleCAS, ocupadaCAS
    FROM tbl_casas
    WHERE idcasa=? AND disponibleCAS = 1`,
      [req.params.id]
    );
    if (rows) {
      res.json(rows);
    } else {
      res.status(200).json("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const agreagarCasa = async (req, res) => {
  try {
    const {
      direccionCAS,
      tipoCAS,
      costoCAS,
      NrPisosCAS,
      descripcionCAS,
      capacidadCAS,
      zonaCAS,
      desactivadaCAS,
      disponibleCAS,
      ocupadaCAS,
    } = req.body;

    if (
      direccionCAS &&
      tipoCAS &&
      costoCAS &&
      NrPisosCAS &&
      descripcionCAS &&
      capacidadCAS &&
      zonaCAS
    ) {
      const [result] = await pool.query(
        `INSERT INTO tbl_casas(direccionCAS, tipoCAS, costoCAS, NrPisosCAS, descripcionCAS, capacidadCAS, zonaCAS, desactivadaCAS, disponibleCAS, ocupadaCAS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          direccionCAS,
          tipoCAS,
          costoCAS,
          NrPisosCAS,
          descripcionCAS,
          capacidadCAS,
          zonaCAS,
          desactivadaCAS,
          disponibleCAS,
          ocupadaCAS,
        ]
      );
      console.log(result);
      if (result.affectedRows <= 0) {
        res.status(400).json("Error creando casas");
      } else {
        res.status(200).json("Casa creada correctamente");
      }
    } else {
      res.status(400).json("Completa todos los campos");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const arrendarCasa = async (req, res) => {
  try {
    const { idCasa, idUsuario, costoCAS } = req.body;

    // Actualizar la tabla tbl_casas para marcar la casa como ocupada
    const [result] = await pool.query(
      "UPDATE tbl_casas SET ocupadaCAS = 1,disponibleCAS=0 WHERE idCasa = ?",
      [idCasa]
    );
    if (result.affectedRows >= 1) {
      const date = "2023/03/12";
      const state = 1;
      const [rows] = await pool.query(
        "INSERT INTO tbl_alquiler (idusuarioA, idcasaA, Fecha_de_inicio, Valor_del_alquiler,estado) VALUES (?, ?, ?, ?,?)",
        [idUsuario, idCasa, date, costoCAS, state]
      );

      console.log(rows);
      // Insertar un nuevo registro en la tabla tbl_alquiler con el ID del usuario y el ID de la casa

      // Enviar una respuesta al cliente
      res.status(200).json("La casa ha sido alquilada correctamente.");
    } else {
      res.status(400).json("La casa  no puedo ser alquilada");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const casaArrendadaUsuario = async (req, res) => {
  try {
    // Actualizar la tabla tbl_casas para marcar la casa como ocupada
    const [rows] = await pool.query(
      `SELECT a.id_alquiler, u.nombreUSU as nombre_usuario, c.direccionCAS as direccion_casa, a.Fecha_de_inicio, a.Valor_del_alquiler,a.estado
        FROM tbl_alquiler a
        JOIN tbl_usuarios u ON u.idUsuario = a.idusuarioA
        JOIN tbl_casas c ON c.idCasa = a.idcasaA
        WHERE idusuarioA= ?;`,
      [req.params.id]
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

{
  /!* Aministrador cambie el estado de la casa*/;
}
export const actualizarCasa = async (req, res) => {
  try {
    const { id } = req.params;
    const { desactivadaCAS, disponibleCAS, ocupadaCAS } = req.body;
    const [rows] = await pool.query(
      `UPDATE tbl_casas SET desactivadaCAS=?,disponibleCAS=?,ocupadaCAS=? WHERE idcasa=?`,
      [desactivadaCAS, disponibleCAS, ocupadaCAS, id]
    );

    if (rows.affectedRows <= 0) {
      res.status(400).json("Eror actualizando casas");
    }

    res.json("Casa Actualizada correctamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const CasasAlquiladas = async (req, res) => {
  try {
    const [rows] =
      await pool.query(`SELECT a.id_alquiler, u.nombreUSU as nombre_usuario, c.direccionCAS as direccion_casa, a.Fecha_de_inicio, a.Valor_del_alquiler,a.estado
    FROM tbl_alquiler a
    JOIN tbl_usuarios u ON u.idUsuario = a.idusuarioA
    JOIN tbl_casas c ON c.idCasa = a.idcasaA;`);
    if (rows) {
      res.json(rows);
    } else {
      res.status(200).json("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CasasArrendadasCanceladas = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const [result] = await pool.query(
      `update tbl_alquiler set estado=0 where id_alquiler=?`,
      [id]
    );
      if(result.affectedRows === 1){
        res.status(200).json("Cancelado correctamente");
      }else{
        res.status(400).json("error al cancelar");
      }
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CasasInhabilitadas = async (req, res) => {
  try {
    const [rows] =
      await pool.query(`SELECT idcasa, direccionCAS, tipoCAS, costoCAS, NrPisosCAS, descripcionCAS, capacidadCAS, zonaCAS, desactivadaCAS, disponibleCAS, ocupadaCAS
    FROM tbl_casas
    WHERE desactivadaCAS = 1`);
    if (rows) {
      res.json(rows);
    } else {
      res.status(200).json("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
