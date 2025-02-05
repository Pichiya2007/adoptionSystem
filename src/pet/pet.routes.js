import { Router } from 'express';
import { check, checkExact } from 'express-validator';
import { getPets, savePet, searchPet, deletePet } from './pet.controller.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.post(
    '/',
    [
        validarJWT,
        check('email', 'Este no es un correo válido.').not().isEmpty(),
        validarCampos
    ],
    savePet
)

router.get('/', getPets)

router.get(
    '/:id',
    [
        validarJWT,
        check('id', 'No es un id válido.').isMongoId(),
        validarCampos
    ],
    searchPet
)

router.delete(
    '/:id',
    [
        validarJWT,
        check('id', 'No es un id válido.').isMongoId(),
        validarCampos
    ],
    deletePet
)

export default router;