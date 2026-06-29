import express from 'express';
import cors from 'cors';
import config from './config.js';
import db from '../src/database/connect.js';
import productosRoutes from './routes/productosRoutes.js';
import contactoRoutes from './routes/contactoRoutes.js';
import dolarRoutes from './routes/dolarRoutes.js';
import urbanLogger from './middlewares/loggerMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urbanLogger);

db.connectToDB();

app.use('/api/productos', productosRoutes);
app.use('/api/contactos', contactoRoutes);
app.use('/api/externa', dolarRoutes);

app.listen(config.PORT, () => {
    console.log(`[2die4] Servidor corriendo en: http://localhost:${config.PORT}`);
});