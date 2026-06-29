import Contacto from '../database/models/Contacto.js';
import contactoService from '../services/contactoService.js'

const guardarMensaje = async (req, res) => {
    try {
        const nuevoMensaje = await contactoService.crearMensaje(req.body);
        res.status(201).json({ status: 201, message: "Mensaje guardado", payload: nuevoMensaje });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

const listarMensajes = async (req, res) => {
    try {
        const lista = await contactoService.obtenerTodosMensajes();
        res.status(200).json({ status: 200, payload: lista });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

export default { guardarMensaje, listarMensajes };