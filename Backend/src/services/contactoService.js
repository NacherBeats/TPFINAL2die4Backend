import Contacto from '../database/models/Contacto.js';

const crearMensaje = async (datosMensaje) => {
    return await Contacto.create(datosMensaje);
};

const obtenerTodosMensajes = async () => {
    return await Contacto.find().sort({ fecha: -1 });
};

export default { crearMensaje, obtenerTodosMensajes };