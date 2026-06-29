import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import contactoController from '../controller/contactoController.js';

const router = Router();

const verificarValidaciones = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ status: 400, errors: errores.array() });
    }
    next();
};

router.get('/', contactoController.listarMensajes);

router.post(
    '/',
    [
        body('nombre').notEmpty().withMessage('El nombre o alias urbano es obligatorio.').trim(),
        body('email').isEmail().withMessage('Se requiere un formato de correo electrónico válido.').normalizeEmail(),
        body('proposicion').isLength({ min: 10 }).withMessage('La propuesta comercial debe tener al menos 10 caracteres.')
    ],
    verificarValidaciones, 
    contactoController.guardarMensaje
);

export default router;