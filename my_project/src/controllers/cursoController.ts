import { Request, Response } from 'express';
import { Curso } from '../models/Curso';
import { Aluno } from '../models/Aluno';

export class CursoController {
  static async create(req: Request, res: Response) {
    try {
      const curso = await Curso.create(req.body);
      res.status(201).json(curso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const cursos = await Curso.findAll();
      res.status(200).json(cursos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const curso = await Curso.findByPk(req.params.id, { include: [Aluno] });
      if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
      await curso.update(req.body);
      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
      await curso.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
