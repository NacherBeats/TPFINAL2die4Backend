import Producto from '../database/models/Producto.js';

const obtenerTodos = async () => {
    return await Producto.find();
};

const modificarStock = async (id, tallesStock) => {
    return await Producto.findByIdAndUpdate(
        id, 
        { tallesStock }, 
        { new: true }
    );
};

export default { obtenerTodos, modificarStock };