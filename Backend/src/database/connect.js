import mongoose from 'mongoose';
import config from '../config.js';

const connectToDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log('[2die4] Conexión exitosa');
    } catch (error) {
        console.error('Error de conexión:', error.message);
        process.exit(1);
    }
};

export default { connectToDB };