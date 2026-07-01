import { Router } from 'express';
import mpController from '../controller/mpController.js';

const router = Router();

router.post('/crear-preferencia', mpController.crearPreferencia);

export default router;