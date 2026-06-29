import { Router } from 'express';
import productosController from '../controller/productosController.js';

const router = Router();

router.get('/', productosController.obtenerProductos);
router.patch('/', productosController.actualizarStock);

export default router;