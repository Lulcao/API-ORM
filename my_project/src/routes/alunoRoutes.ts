import { Router } from 'express';
import { AlunoController } from '../controllers/alunoController';

const router = Router();

router.post('/', AlunoController.create);
router.get('/', AlunoController.list);
router.get('/:id', AlunoController.get);
router.put('/:id', AlunoController.update);
router.patch('/:id', AlunoController.update);
router.delete('/:id', AlunoController.delete);

export default router;
