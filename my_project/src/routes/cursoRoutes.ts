import { Router } from 'express';
import { CursoController } from '../controllers/cursoController';

const router = Router();

router.post('/', CursoController.create);
router.get('/', CursoController.list);
router.get('/:id', CursoController.get);
router.put('/:id', CursoController.update);
router.patch('/:id', CursoController.update);
router.delete('/:id', CursoController.delete);

export default router;
