import dolarService from '../services/dolarService.js';

const obtenerCotizacionDolar = async (req, res) => {
    try {
        const data = await dolarService.consultarAPIExterna();
        
        res.status(200).json({
            status: 200,
            origen: "DolarApi",
            compra: data.compra,
            venta: data.venta,
            actualizado: data.fechaActualizacion
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: "Error al consumir API: " + error.message });
    }
};

export default { obtenerCotizacionDolar };