import { Router } from 'express';
import dolarController from '../controller/dolarController.js';

const router = Router();

router.get('/dolar', dolarController.obtenerCotizacionDolar);

export default router;