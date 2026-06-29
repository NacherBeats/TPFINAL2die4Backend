import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String, default: "" },
    edicionLimitada: { type: Boolean, default: false },
    tallesStock: {
        type: Map,
        of: Number,
        default: { "S": 0, "M": 0, "L": 0, "XL": 0 }
    }
});

export default mongoose.model('Producto', productoSchema);