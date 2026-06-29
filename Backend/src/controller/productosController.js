import Producto from '../database/models/Producto.js';
import productosService from '../services/productosService.js'

const obtenerProductos = async (req, res) => {
    try {
        const lista = await productosService.obtenerTodos();
        res.status(200).json({ status: 200, payload: lista });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

const actualizarStock = async (req, res) => {
    try {
        const { id } = req.query; 
        const { tallesStock } = req.body;
        
        const actualizado = await productosService.modificarStock(id, tallesStock );
        res.status(200).json({ status: 200, payload: actualizado });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

export default { obtenerProductos, actualizarStock };