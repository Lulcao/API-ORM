import { Request, Response } from 'express';
import { Aluno } from '../models/Aluno';
import { Curso } from '../models/Curso';

export class AlunoController {
  static async create(req: Request, res: Response) {
    try {
      const aluno = await Aluno.create(req.body);
      res.status(201).json(aluno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const alunos = await Aluno.findAll();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, { include: [Curso] });
      if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
      await aluno.update(req.body);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
      await aluno.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
